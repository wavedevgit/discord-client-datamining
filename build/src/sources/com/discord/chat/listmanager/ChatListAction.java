package com.discord.chat.listmanager;

import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0004\u0004\u0005\u0006\u0007B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0004\b\t\n\u000b¨\u0006\f"}, d2 = {"Lcom/discord/chat/listmanager/ChatListAction;", "", "<init>", "()V", "ScrollTo", "StickToBottomIfAtBottom", "Clear", "Noop", "Lcom/discord/chat/listmanager/ChatListAction$Clear;", "Lcom/discord/chat/listmanager/ChatListAction$Noop;", "Lcom/discord/chat/listmanager/ChatListAction$ScrollTo;", "Lcom/discord/chat/listmanager/ChatListAction$StickToBottomIfAtBottom;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ChatListAction {

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/chat/listmanager/ChatListAction$Clear;", "Lcom/discord/chat/listmanager/ChatListAction;", "<init>", "()V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Clear extends ChatListAction {
        @NotNull
        public static final Clear INSTANCE = new Clear();

        private Clear() {
            super(null);
        }
    }

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/chat/listmanager/ChatListAction$Noop;", "Lcom/discord/chat/listmanager/ChatListAction;", "<init>", "()V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Noop extends ChatListAction {
        @NotNull
        public static final Noop INSTANCE = new Noop();

        private Noop() {
            super(null);
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u000e\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0005HÆ\u0003J'\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00052\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\f¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/listmanager/ChatListAction$ScrollTo;", "Lcom/discord/chat/listmanager/ChatListAction;", ViewProps.POSITION, "", "animate", "", "highlight", "<init>", "(IZZ)V", "getPosition", "()I", "getAnimate", "()Z", "getHighlight", "component1", "component2", "component3", "copy", "equals", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ScrollTo extends ChatListAction {
        private final boolean animate;
        private final boolean highlight;
        private final int position;

        public ScrollTo(int i10, boolean z10, boolean z11) {
            super(null);
            this.position = i10;
            this.animate = z10;
            this.highlight = z11;
        }

        public static /* synthetic */ ScrollTo copy$default(ScrollTo scrollTo, int i10, boolean z10, boolean z11, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = scrollTo.position;
            }
            if ((i11 & 2) != 0) {
                z10 = scrollTo.animate;
            }
            if ((i11 & 4) != 0) {
                z11 = scrollTo.highlight;
            }
            return scrollTo.copy(i10, z10, z11);
        }

        public final int component1() {
            return this.position;
        }

        public final boolean component2() {
            return this.animate;
        }

        public final boolean component3() {
            return this.highlight;
        }

        @NotNull
        public final ScrollTo copy(int i10, boolean z10, boolean z11) {
            return new ScrollTo(i10, z10, z11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ScrollTo) {
                ScrollTo scrollTo = (ScrollTo) obj;
                return this.position == scrollTo.position && this.animate == scrollTo.animate && this.highlight == scrollTo.highlight;
            }
            return false;
        }

        public final boolean getAnimate() {
            return this.animate;
        }

        public final boolean getHighlight() {
            return this.highlight;
        }

        public final int getPosition() {
            return this.position;
        }

        public int hashCode() {
            return (((Integer.hashCode(this.position) * 31) + Boolean.hashCode(this.animate)) * 31) + Boolean.hashCode(this.highlight);
        }

        @NotNull
        public String toString() {
            int i10 = this.position;
            boolean z10 = this.animate;
            boolean z11 = this.highlight;
            return "ScrollTo(position=" + i10 + ", animate=" + z10 + ", highlight=" + z11 + ")";
        }
    }

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/chat/listmanager/ChatListAction$StickToBottomIfAtBottom;", "Lcom/discord/chat/listmanager/ChatListAction;", "<init>", "()V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class StickToBottomIfAtBottom extends ChatListAction {
        @NotNull
        public static final StickToBottomIfAtBottom INSTANCE = new StickToBottomIfAtBottom();

        private StickToBottomIfAtBottom() {
            super(null);
        }
    }

    public /* synthetic */ ChatListAction(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private ChatListAction() {
    }
}
