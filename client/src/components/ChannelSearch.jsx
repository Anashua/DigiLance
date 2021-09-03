import React, {useState, useEffect} from 'react';
import { useChatContext } from 'stream-chat-react';

import {SearchIcon} from '../assets/SearchIcon';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [event, setLoading] = useState(false);

    const getChannels = async (text) => {
        try{
            //TODO: Fetch channels
        }catch(error){
            setQuery('');
        }
    }
    
    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }

    return (
        <div class = 'channel-search__container'>
            <div className = 'channel-search__input__wrapper'>
                <div className = 'channel-search__input__icon'>
                    <SearchIcon />
                </div>
                <input className = 'channel-seach__input__text'
                    placeholder = 'Search'
                    type = 'text'
                    value = {query}
                    onChange = {onSearch}
                    />
            </div>   
        </div>
    )
}

export default ChannelSearch
