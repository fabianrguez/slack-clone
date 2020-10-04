import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Add, Apps, Bookmark, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import SidebarOption from './SidebarOption/SidebarOption';
import db from '../../firebase';
import { useStateValue } from '../../context/StateProvider';

const Sidebar = () => {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot =>
            setChannels(snapshot.docs.map(document => ({
                id: document.id,
                name: document.data().name
            })
            )
            ));
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecord />
                    {user?.displayName}
                </h3>
                </div>
                <Create />
            </div>
            <SidebarOption title="Threads" Icon={InsertComment} />
            <SidebarOption title="Mentions & reactions" Icon={Inbox} />
            <SidebarOption title="Saved items" Icon={Drafts} />
            <SidebarOption title="Channel browser" Icon={Bookmark} />
            <SidebarOption title="People & user groups" Icon={PeopleAlt} />
            <SidebarOption title="Apps" Icon={Apps} />
            <SidebarOption title="File browser" Icon={FileCopy} />
            <SidebarOption title="Show less" Icon={ExpandLess} />
            <hr />
            <SidebarOption title="Channels" Icon={ExpandMore} />
            <hr />
            <SidebarOption title="Add Channel" Icon={Add} addChannelOption/>
            { channels.map(channel =>
                <SidebarOption id={channel.id} key={channel.id} title={channel.name} />)
            }
        </div>
    );
}
export default Sidebar;