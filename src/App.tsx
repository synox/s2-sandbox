/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React, { useState } from "react";
import "@react-spectrum/s2/page.css";
import {
  ActionButton,
  ActionButtonGroup,
  ActionMenu,
  Button,
  ButtonGroup,
  Cell,
  Column,
  Divider,
  Heading,
  LinkButton,
  Menu,
  MenuItem,
  MenuTrigger,
  Picker,
  PickerItem,
  Row,
  SubmenuTrigger,
  TableBody,
  TableHeader,
  TableView,
  Text,
  ToggleButton,
  MenuSection, Header,
  ToggleButtonGroup,
  TreeView,
  TreeViewItem,
  TreeViewItemContent
} from "@react-spectrum/s2";
import Edit from "@react-spectrum/s2/icons/Edit";
import FileTxt from "@react-spectrum/s2/icons/FileText";
import Folder from "@react-spectrum/s2/icons/Folder";
import Section from "./components/Section";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { CardViewExample } from "./components/CardViewExample";
import { CollectionCardsExample } from "./components/CollectionCardsExample";

const Lazy = React.lazy(() => import('./Lazy'));

function App() {
  let [isLazyLoaded, setLazyLoaded] = useState(false);
  let [cardViewState, setCardViewState] = useState({
    layout: 'grid',
    loadingState: 'idle',
  });
  let cardViewLoadingOptions = [
    {id: 'idle', label: 'Idle'},
    {id: 'loading', label: 'Loading'},
    {id: 'sorting', label: 'Sorting'},
    {id: 'loadingMore', label: 'Loading More'},
    {id: 'error', label: 'Error'},
  ];
  let cardViewLayoutOptions = [
    {id: 'grid', label: 'Grid'},
    {id: 'waterfall', label: 'Waterfall'}
  ];
  return (
   
   <main>
     <ActionMenu>
              <MenuSection>
                <Header>
                  <Heading>Text Alignment</Heading>
                </Header>
                <MenuItem id={"one1"}>View available add-ons View available add-ons View available add-ons</MenuItem>
                <MenuItem id={"one2"}>some long text</MenuItem>
                <MenuItem id={"one3d"}>hello world</MenuItem>
              </MenuSection>
            </ActionMenu>

            <ActionMenu>
                <MenuItem id={"one1"}>View available add-ons View available add-ons View available add-ons</MenuItem>
                <MenuItem id={"one2"}>some long text</MenuItem>
                <MenuItem id={"one3d"}>hello world</MenuItem>
            </ActionMenu>
    </main>
  );
}

export default App;
