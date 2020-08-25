import React, { Component } from 'react';
import fetchApi from '../fetchApi';
import SearchBar from '../SearchBar';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Spinner from '../Loader/Loader';
import Modal from '../Modal';
export default class App extends Component {
  state = {
    photo: [],
    searchQuery: '',
    page: 1,
    spinner: false,
    showModal: false,
    popUpUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const triger = this.state.page;
    if (prevQuery !== nextQuery) {
      this.fetchImage();
    }
    if (triger > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImage = query => {
    this.setState({ spinner: true });

    const { searchQuery, page } = this.state;

    fetchApi(searchQuery, page).then(response => {
      this.setState(prevState => ({
        page: prevState.page + 1,
        photo: [...prevState.photo, ...response.hits],
        spinner: false,
      }));
    });
  };
  handleFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      photo: [],
    });
  };

  handlePopUp = url => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      popUpUrl: url,
    }));
  };
  handleCloseModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      popUpUrl: '',
    }));
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            array={this.state.photo}
            onClick={this.handlePopUp}
          />
        </ImageGallery>
        {this.state.spinner && <Spinner />}
        {this.state.photo.length > 0 && !this.state.spinner && (
          <Button onSubmit={this.fetchImage} />
        )}
        {this.state.showModal && (
          <Modal url={this.state.popUpUrl} closeModal={this.handleCloseModal} />
        )}
      </>
    );
  }
}
// ======
