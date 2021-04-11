import React from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';
import { useChannels } from '../../contexts/ChannelsProvider';

export const ChannelList = ({ channels }) => {
  const { setChannelId, setFlag } = useChannels();

  return (
    <Tabs isManual variant="soft-rounded" orientation="vertical">
      <TabList>
        {channels.map(channel => (
          <Tab
            justifyContent="flex-start"
            key={channel.id}
            id={channel.id}
            color="gray.500"
            onClick={() => {
              setChannelId(channel.id);
              setFlag(true);
            }}
          >
            <FaHashtag />
            {channel.name}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
