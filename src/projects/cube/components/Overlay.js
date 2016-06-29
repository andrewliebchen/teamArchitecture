import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import styles from '../styles/Overlay.scss';

export default class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  renderGraphic() {
    return (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 80"
        className={styles.graphic}
        width="10rem">
        <g>
          <path d="M87.121,45.087c-0.184-0.369-0.822-0.726-1.199-0.9c-0.32-0.149-0.849-0.45-1.48-0.853c-1.11-0.707-2.571-1.727-4.17-2.88   c-2.396-1.732-5.11-3.768-7.508-5.546c-1.199-0.889-2.32-1.713-3.287-2.406c-0.971-0.694-1.779-1.251-2.393-1.628l0,0   c-0.713-0.438-1.484-0.673-2.238-0.671c-0.49,0-0.966,0.097-1.397,0.269c-0.651,0.257-1.207,0.669-1.673,1.158   c-0.465,0.491-0.848,1.062-1.155,1.681c-0.333,0.67-0.552,1.391-0.731,2.098c-0.179,0.706-0.312,1.4-0.434,1.981l0,0   c-0.114,0.555-0.212,1.045-0.217,1.581c0,0.222,0.021,0.455,0.078,0.698c0.084,0.363,0.277,0.749,0.56,1.043   c0.281,0.297,0.617,0.499,0.96,0.643c0.119,0.05,0.249,0.083,0.378,0.094c0.274,0.024,0.529,0.038,0.772,0.038   c0.279,0,0.546-0.018,0.805-0.062c0.451-0.072,0.896-0.245,1.254-0.503c0.27-0.191,0.48-0.414,0.655-0.63   c0.262-0.329,0.452-0.646,0.674-0.985c0.013-0.019,0.024-0.04,0.037-0.059c0.493,0.429,1.101,0.96,1.698,1.49   c0.932,0.821,1.849,1.64,2.332,2.071h-0.002c0.732,0.654,1.242,1.133,1.836,1.646c0.035,0.029,0.07,0.06,0.105,0.09   c-1.218-0.03-2.439-0.051-3.668-0.052c-7.881,0-16.539,0.081-24.416,0.081c-4.257,0-9.297,0-14.063,0   c0.484-0.427,0.944-0.854,1.562-1.405l0,0c0.551-0.493,1.67-1.491,2.728-2.422c0.466-0.411,0.916-0.804,1.301-1.138   c0.016,0.024,0.033,0.05,0.049,0.074c0.166,0.258,0.318,0.503,0.497,0.752c0.134,0.186,0.285,0.375,0.473,0.557   c0.279,0.275,0.659,0.523,1.078,0.663c0.42,0.143,0.857,0.191,1.328,0.192c0.244-0.001,0.499-0.014,0.774-0.038   c0.129-0.012,0.259-0.044,0.378-0.094c0.229-0.097,0.453-0.217,0.662-0.376c0.314-0.234,0.586-0.576,0.737-0.944   c0.153-0.368,0.196-0.732,0.197-1.064c-0.004-0.536-0.102-1.026-0.216-1.581v0.002c-0.122-0.583-0.255-1.276-0.433-1.982   c-0.179-0.708-0.398-1.428-0.731-2.099l0,0c-0.413-0.823-0.953-1.567-1.652-2.14c-0.351-0.286-0.743-0.527-1.176-0.698   s-0.908-0.269-1.398-0.269c-0.755-0.001-1.526,0.234-2.238,0.672c-0.469,0.288-1.047,0.678-1.728,1.156   c-2.373,1.667-5.971,4.396-9.343,6.876c-1.684,1.24-3.311,2.417-4.683,3.36c-0.686,0.471-1.308,0.883-1.838,1.213   c-0.526,0.329-0.967,0.576-1.248,0.706c-0.049,0.023-0.092,0.054-0.136,0.081c-0.021,0.006-0.04,0.018-0.061,0.024   c-0.038,0.015-0.076,0.029-0.113,0.046c-0.036,0.018-0.07,0.038-0.104,0.058c-0.035,0.021-0.069,0.042-0.103,0.067   c-0.032,0.024-0.062,0.05-0.092,0.076c-0.03,0.027-0.059,0.055-0.086,0.084c-0.028,0.03-0.053,0.061-0.078,0.094   c-0.024,0.032-0.047,0.064-0.068,0.098c-0.021,0.035-0.04,0.07-0.058,0.107c-0.018,0.038-0.035,0.075-0.049,0.114   c-0.014,0.038-0.026,0.075-0.036,0.115c-0.011,0.042-0.021,0.085-0.028,0.129c-0.003,0.019-0.01,0.037-0.012,0.056   c-0.179,1.628-0.229,2.94-0.229,4.066c0.001,1.364,0.07,2.443,0.07,3.489c0,0.293-0.006,0.586-0.019,0.883v0.001   c-0.034,0.777-0.049,1.566-0.049,2.364c0,3.043,0.226,6.196,0.543,9.096c0.067,0.612,0.568,1.087,1.183,1.121   c4.652,0.259,8.101,0.337,12.519,0.337c2.372,0,5.024-0.021,8.302-0.051l0,0c0.266-0.002,0.58-0.004,0.929-0.004   c1.836,0,4.651,0.027,6.875,0.027c0.849,0,1.612-0.004,2.211-0.016h-0.001c0.27-0.005,0.542-0.049,0.796-0.136   c0.48-0.162,0.873-0.47,1.147-0.797c0.243-0.287,0.415-0.591,0.555-0.892c0.243-0.526,0.397-1.059,0.548-1.562   c0.112-0.378,0.219-0.739,0.334-1.059c0.17-0.479,0.366-0.842,0.543-1.028c0.088-0.097,0.165-0.154,0.252-0.199   c0.088-0.043,0.192-0.077,0.361-0.091l0,0c0.115-0.01,0.223-0.014,0.322-0.014c0.391,0,0.667,0.061,0.874,0.14   c0.181,0.071,0.313,0.158,0.44,0.271c0.216,0.19,0.409,0.483,0.581,0.879c0.129,0.295,0.241,0.639,0.354,1   c0.084,0.271,0.166,0.552,0.264,0.838c0.072,0.214,0.152,0.432,0.253,0.65c0.153,0.326,0.351,0.676,0.69,0.991   c0.168,0.156,0.377,0.299,0.611,0.399c0.235,0.104,0.495,0.166,0.75,0.181H55.3c0.896,0.056,3.07,0.149,5.515,0.231   c2.44,0.082,5.134,0.152,7.043,0.152c0.651,0,1.213-0.009,1.656-0.027v-0.002c1.108-0.047,2.156-0.065,3.172-0.065   c2.496,0,4.789,0.108,7.228,0.108c1.905,0,3.897-0.067,6.118-0.31c0.521-0.058,0.953-0.428,1.084-0.937   c0.037-0.149,0.057-0.272,0.074-0.41c0.029-0.237,0.051-0.508,0.066-0.827c0.049-0.955,0.062-2.354,0.062-3.984   c0-3.084-0.055-6.979-0.055-9.942c0-1.052,0.006-1.985,0.025-2.716c0.009-0.364,0.021-0.678,0.035-0.924   c0.014-0.244,0.033-0.429,0.045-0.487C87.395,46.028,87.305,45.456,87.121,45.087z M72.923,42.549   c-0.543-0.469-1.05-0.944-1.805-1.619l0,0c-0.556-0.495-1.677-1.496-2.741-2.434c-0.531-0.468-1.05-0.922-1.479-1.291   c-0.213-0.185-0.404-0.348-0.565-0.483c-0.163-0.137-0.289-0.241-0.403-0.328c-0.55-0.414-1.324-0.312-1.75,0.229   c-0.406,0.519-0.705,0.975-0.939,1.337c-0.174,0.273-0.679,1.406-1.23,1.165c-0.29-0.127-0.199-0.715-0.092-1.218l0,0   c0.127-0.607,0.256-1.265,0.411-1.88c0.153-0.615,0.341-1.187,0.543-1.59c0.282-0.57,0.642-1.031,0.991-1.314   c0.174-0.142,0.344-0.242,0.504-0.305c0.162-0.063,0.314-0.093,0.476-0.093c0.246,0.001,0.537,0.066,0.925,0.301l0,0   c0.385,0.236,0.938,0.606,1.594,1.068c2.305,1.62,5.91,4.352,9.298,6.845c1.694,1.248,3.338,2.436,4.75,3.407   c0.212,0.145,0.417,0.285,0.618,0.42c-0.241,0.002-0.479,0.006-0.703,0.007l0,0c-0.092,0-0.184,0-0.271,0   c-1.878,0-5.652-0.109-5.652-0.109S73.466,43.018,72.923,42.549z M28.974,37.293c1.194-0.886,2.306-1.704,3.253-2.382   c0.945-0.676,1.733-1.217,2.24-1.527c0.386-0.233,0.676-0.299,0.923-0.301c0.162,0,0.312,0.03,0.475,0.093   c0.24,0.094,0.506,0.273,0.768,0.55c0.262,0.275,0.517,0.642,0.729,1.069c0.203,0.403,0.389,0.975,0.542,1.59   c0.155,0.616,0.283,1.273,0.41,1.88v0.002c0.295,0.811-0.392,1.374-0.664,0.96c-0.027-0.02-0.074-0.06-0.151-0.156   c-0.116-0.14-0.286-0.407-0.516-0.767c-0.231-0.361-0.527-0.811-0.928-1.32c-0.424-0.542-1.2-0.644-1.75-0.229   c-0.115,0.086-0.241,0.19-0.404,0.327c-0.562,0.47-1.508,1.299-2.445,2.127c-0.935,0.827-1.855,1.647-2.34,2.081l0,0   c-0.755,0.675-1.263,1.15-1.806,1.619c-0.542,0.469-1.136,0.947-2.097,1.655c-0.004,0.002-0.007,0.007-0.012,0.01   c-2.251,0-4.356,0-6.188,0c0.756-0.521,1.57-1.101,2.424-1.717C23.864,41.105,26.583,39.064,28.974,37.293z M55.453,64.068h0.002   l0,0C55.454,64.068,55.453,64.068,55.453,64.068z M72.684,64.354c-1.043,0-2.131,0.019-3.281,0.069v-0.001   c-0.381,0.018-0.916,0.025-1.545,0.025c-1.854,0-4.534-0.068-6.959-0.149c-2.299-0.078-4.379-0.168-5.303-0.221   c-0.029-0.05-0.066-0.123-0.104-0.222c-0.117-0.279-0.244-0.726-0.402-1.231c-0.118-0.381-0.26-0.8-0.457-1.229   c-0.147-0.321-0.327-0.65-0.562-0.969c-0.346-0.476-0.824-0.927-1.438-1.236c-0.614-0.312-1.344-0.475-2.15-0.474   c-0.167,0-0.338,0.007-0.514,0.021l0,0c-0.576,0.043-1.12,0.222-1.568,0.503c-0.393,0.245-0.708,0.562-0.955,0.891   c-0.433,0.581-0.681,1.202-0.883,1.788c-0.149,0.439-0.269,0.865-0.383,1.243c-0.085,0.282-0.168,0.539-0.25,0.749   c-0.121,0.316-0.25,0.514-0.303,0.562l-0.021,0.019l-0.026,0.002h-0.001c-0.57,0.012-1.323,0.016-2.163,0.016   c-2.207,0-5.018-0.026-6.875-0.026c-0.354,0-0.675,0-0.952,0.004l0,0c-3.277,0.027-5.924,0.05-8.28,0.05   c-4.042,0-7.227-0.063-11.307-0.274c-0.25-2.527-0.417-5.201-0.417-7.759c0-0.765,0.015-1.521,0.047-2.255v0.001   c0.015-0.342,0.021-0.671,0.021-0.994c-0.001-1.155-0.071-2.218-0.07-3.489c0-0.781,0.025-1.647,0.107-2.669   c5.958,0,18.556,0,27.611,0c7.892,0,16.55-0.081,24.416-0.081c4.404,0,8.837,0.277,13.341,0.278c0.092,0,0.186,0,0.277,0l0,0   c0.607-0.002,1.23-0.016,1.846-0.016c0.555,0,1.098,0.015,1.607,0.056c-0.03,0.836-0.041,1.949-0.042,3.241   c0.001,2.991,0.058,6.887,0.058,9.942c0,1.229-0.011,2.322-0.033,3.155c-0.008,0.218-0.016,0.418-0.023,0.597   c-1.709,0.148-3.285,0.195-4.831,0.195C77.551,64.462,75.254,64.354,72.684,64.354z"/><path d="M40.654,50.22c-0.986-0.72-2.188-1.141-3.576-1.397c-1.392-0.256-2.987-0.35-4.82-0.351H32.17   c-0.004,0-0.008,0.002-0.012,0.002c-0.004,0-0.008-0.001-0.012-0.001c-1.408,0.031-2.832,0.032-4.204,0.127   c-1.029,0.073-2.03,0.197-2.981,0.441c-0.712,0.184-1.398,0.437-2.036,0.799c-0.477,0.271-0.925,0.605-1.323,1.009   c-0.598,0.606-1.07,1.37-1.376,2.264c-0.308,0.893-0.458,1.908-0.458,3.065c-0.001,0.916,0.195,1.808,0.606,2.601   c0.308,0.596,0.733,1.132,1.254,1.587c0.782,0.682,1.769,1.181,2.92,1.51c1.146,0.327,2.462,0.49,3.956,0.492v0.001h0.025   c0.001,0,0.001,0,0.002,0h0.004l0,0c1.634-0.001,3.52-0.008,5.207-0.008c0.441,0,0.87,0,1.276,0.002l0,0c0.049,0,0.103,0,0.159,0   c0.479,0,1.182-0.01,1.973-0.125c0.595-0.088,1.245-0.232,1.9-0.49c0.491-0.195,0.987-0.453,1.455-0.799   c0.702-0.518,1.336-1.241,1.771-2.174c0.437-0.931,0.673-2.053,0.673-3.367V55.4l0,0c0-1.26-0.217-2.387-0.724-3.357   C41.851,51.314,41.309,50.697,40.654,50.22z M40.432,55.405c-0.001,1.21-0.25,2.016-0.585,2.587   c-0.253,0.429-0.562,0.74-0.925,0.99c-0.542,0.377-1.223,0.604-1.905,0.723c-0.681,0.121-1.344,0.136-1.836,0.135   c-0.052,0-0.103,0-0.152,0l0,0c-0.409-0.002-0.84-0.003-1.283-0.003c-1.693,0-3.581,0.009-5.209,0.009l0,0l0,0h-0.001   c-1.175,0-2.174-0.115-2.993-0.316c-0.615-0.15-1.127-0.348-1.543-0.575c-0.625-0.343-1.031-0.74-1.299-1.183   c-0.266-0.444-0.408-0.955-0.41-1.595c0-0.743,0.077-1.358,0.206-1.864c0.114-0.441,0.267-0.801,0.446-1.103   c0.317-0.524,0.718-0.892,1.264-1.198c0.408-0.228,0.9-0.41,1.467-0.551c0.85-0.211,1.865-0.322,2.975-0.379   c1.104-0.059,2.302-0.064,3.534-0.09h0.077c1.55-0.001,2.878,0.072,3.966,0.24c0.816,0.125,1.495,0.304,2.035,0.524   c0.405,0.166,0.731,0.354,0.995,0.562c0.394,0.313,0.659,0.662,0.86,1.145c0.198,0.48,0.318,1.112,0.318,1.936v0.007H40.432z"/><path d="M77.79,50.221c-0.985-0.721-2.187-1.14-3.574-1.398c-1.391-0.257-2.985-0.35-4.817-0.351h-0.094   c-0.004,0-0.008,0.002-0.012,0.002s-0.008-0.001-0.012-0.001c-1.408,0.03-2.832,0.032-4.203,0.127   c-1.029,0.072-2.031,0.196-2.98,0.44c-0.714,0.185-1.4,0.437-2.037,0.8c-0.478,0.271-0.926,0.604-1.322,1.01   c-0.598,0.605-1.069,1.369-1.377,2.262c-0.307,0.894-0.457,1.91-0.457,3.066c-0.002,0.969,0.271,1.901,0.773,2.693   c0.375,0.597,0.872,1.115,1.455,1.552c0.877,0.655,1.945,1.136,3.164,1.458c1.207,0.317,2.566,0.48,4.057,0.484l0,0l0.039,0.001   c0,0,0.002,0,0.004,0h0.002l0,0c1.654-0.001,3.101-0.009,4.613-0.009c0.375,0,0.756,0,1.145,0.002h-0.002c0.054,0,0.111,0,0.171,0   c0.481,0,1.187-0.01,1.978-0.127c0.596-0.086,1.244-0.233,1.899-0.492c0.489-0.195,0.983-0.454,1.45-0.801   c0.701-0.518,1.334-1.241,1.767-2.172c0.435-0.931,0.67-2.049,0.67-3.359l0,0v-0.006l0,0v-0.004c0-1.26-0.217-2.387-0.726-3.356   C78.986,51.316,78.443,50.697,77.79,50.221z M77.568,55.402c-0.002,1.209-0.25,2.015-0.584,2.586   c-0.252,0.428-0.562,0.74-0.924,0.992c-0.539,0.375-1.22,0.604-1.899,0.724c-0.681,0.121-1.343,0.137-1.837,0.136   c-0.057,0-0.109,0-0.162,0l0,0c-0.391-0.002-0.773-0.003-1.15-0.003c-1.521,0.001-2.967,0.009-4.613,0.009h-0.002   c-1.176,0-2.227-0.115-3.125-0.32c-1.354-0.308-2.354-0.823-2.965-1.401c-0.307-0.289-0.521-0.592-0.664-0.907   c-0.144-0.316-0.218-0.652-0.219-1.037c0-0.744,0.077-1.359,0.206-1.865c0.114-0.441,0.267-0.801,0.446-1.103   c0.316-0.524,0.718-0.892,1.264-1.198c0.408-0.229,0.898-0.412,1.467-0.551c0.851-0.212,1.865-0.322,2.976-0.379   c1.104-0.059,2.303-0.064,3.534-0.09h0.082c1.55-0.001,2.877,0.072,3.963,0.24c0.816,0.125,1.494,0.304,2.033,0.524   c0.405,0.166,0.731,0.354,0.994,0.562c0.396,0.313,0.66,0.662,0.86,1.145c0.198,0.48,0.319,1.112,0.319,1.936V55.402z"/>
        </g>
      </svg>
    );
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="overlay"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        {this.state.show ?
          <div className={styles.overlay} onClick={this.toggleModal}>
            <div className={styles.content}>
              {this.renderGraphic()}
              <p>Grab your anaglyph (red/blue) glasses and check this out. Click anywhere to get started...</p>
            </div>
          </div>
        : null}
      </CSSTransitionGroup>
    );
  }

  toggleModal = () => {
    this.setState({show: !this.state.show});
  }
}
