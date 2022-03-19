import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import styled from 'styled-components';
import './maps.scss';

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchMapInput = ({
  options,
  onSelect,
  onSearch,
  disabled,
  itemLabel,
  placeholder,
}) => (
  <SearchInputContainer>
    <p>{itemLabel}</p>
    <AutoComplete
      placeholder={placeholder}
      options={options}
      onSearch={onSearch}
      onSelect={onSelect}
      disabled={disabled}
      className="search-bar-styling"
      dropdownClassName="search-dropdown"
    />
  </SearchInputContainer>
);

SearchMapInput.propTypes = {
  itemLabel: PropTypes.string,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

SearchMapInput.defaultProps = {
  placeholder: '',
  itemLabel: '',
};

export default SearchMapInput;
