/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContentWrapper>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
          <span aria-hidden>
            <Icon id='close' />
          </span>
        </CloseButton>
        <NavLinksWrapper>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavLinksWrapper>
        <FooterLinkWrapper>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterLinkWrapper>
      </DialogContentWrapper>
    </StyledDialogOverlay>
  );
};

const StyledDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(100,100,100,0.8);
`;

const DialogContentWrapper = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 15%;
  padding: 1.5em;
  padding-left: 3em;
  background: ${COLORS.white};
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const NavLinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  &>a {
    margin: 0.5em 0;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    text-transform: uppercase;
    font-weight: ${WEIGHTS.medium};
  }
  &>a:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLinkWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  &>a {
    margin: 0.5em 0;
    text-decoration: none;
    color: ${COLORS.gray[700]};
  }
`;

export default MobileMenu;
