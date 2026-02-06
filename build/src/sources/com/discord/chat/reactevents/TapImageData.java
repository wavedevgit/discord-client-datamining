package com.discord.chat.reactevents;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0015\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u00020\u0001:\u00011BO\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u000e\u0010\u000fJ\b\u0010\u001f\u001a\u00020 H\u0016J\t\u0010!\u001a\u00020\u0003HÆ\u0003J\t\u0010\"\u001a\u00020\u0005HÆ\u0003J\t\u0010#\u001a\u00020\u0003HÆ\u0003J\t\u0010$\u001a\u00020\bHÆ\u0003J\u0010\u0010%\u001a\u0004\u0018\u00010\nHÆ\u0003¢\u0006\u0002\u0010\u0018J\u0010\u0010&\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u001bJ\u000b\u0010'\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010(\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010\u001bJf\u0010)\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0002\u0010*J\u0013\u0010+\u001a\u00020,2\b\u0010-\u001a\u0004\u0018\u00010.HÖ\u0003J\t\u0010/\u001a\u00020\u0005HÖ\u0001J\t\u00100\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0011R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0015\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u0017\u0010\u0018R\u0015\u0010\u000b\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u001c\u001a\u0004\b\u001a\u0010\u001bR\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0011R\u0015\u0010\r\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010\u001c\u001a\u0004\b\u001e\u0010\u001b¨\u00062"}, d2 = {"Lcom/discord/chat/reactevents/TapImageData;", "Lcom/discord/reactevents/ReactEvent;", StackTraceHelper.ID_KEY, "", "index", "", "type", "layout", "Lcom/discord/chat/reactevents/TapImageData$Layout;", "portal", "", "embedIndex", "componentId", "componentMediaIndex", "<init>", "(Ljava/lang/String;ILjava/lang/String;Lcom/discord/chat/reactevents/TapImageData$Layout;Ljava/lang/Double;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;)V", "getId", "()Ljava/lang/String;", "getIndex", "()I", "getType", "getLayout", "()Lcom/discord/chat/reactevents/TapImageData$Layout;", "getPortal", "()Ljava/lang/Double;", "Ljava/lang/Double;", "getEmbedIndex", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getComponentId", "getComponentMediaIndex", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "(Ljava/lang/String;ILjava/lang/String;Lcom/discord/chat/reactevents/TapImageData$Layout;Ljava/lang/Double;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;)Lcom/discord/chat/reactevents/TapImageData;", "equals", "", "other", "", "hashCode", "toString", "Layout", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapImageData implements ReactEvent {
    private final String componentId;
    private final Integer componentMediaIndex;
    private final Integer embedIndex;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f9152id;
    private final int index;
    @NotNull
    private final Layout layout;
    private final Double portal;
    @NotNull
    private final String type;

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nJ\u0006\u0010\u0012\u001a\u00020\u0013J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\bHÆ\u0003J;\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\bHÆ\u0001J\u0013\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001e\u001a\u00020\u001fHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\fR\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011¨\u0006 "}, d2 = {"Lcom/discord/chat/reactevents/TapImageData$Layout;", "", "width", "", "height", "x", "y", ViewProps.RESIZE_MODE, "Lcom/discord/chat/reactevents/ViewResizeMode;", "<init>", "(IIIILcom/discord/chat/reactevents/ViewResizeMode;)V", "getWidth", "()I", "getHeight", "getX", "getY", "getResizeMode", "()Lcom/discord/chat/reactevents/ViewResizeMode;", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Layout {
        private final int height;
        @NotNull
        private final ViewResizeMode resizeMode;
        private final int width;

        /* renamed from: x  reason: collision with root package name */
        private final int f9153x;

        /* renamed from: y  reason: collision with root package name */
        private final int f9154y;

        public Layout(int i10, int i11, int i12, int i13, @NotNull ViewResizeMode resizeMode) {
            Intrinsics.checkNotNullParameter(resizeMode, "resizeMode");
            this.width = i10;
            this.height = i11;
            this.f9153x = i12;
            this.f9154y = i13;
            this.resizeMode = resizeMode;
        }

        public static /* synthetic */ Layout copy$default(Layout layout, int i10, int i11, int i12, int i13, ViewResizeMode viewResizeMode, int i14, Object obj) {
            if ((i14 & 1) != 0) {
                i10 = layout.width;
            }
            if ((i14 & 2) != 0) {
                i11 = layout.height;
            }
            if ((i14 & 4) != 0) {
                i12 = layout.f9153x;
            }
            if ((i14 & 8) != 0) {
                i13 = layout.f9154y;
            }
            if ((i14 & 16) != 0) {
                viewResizeMode = layout.resizeMode;
            }
            ViewResizeMode viewResizeMode2 = viewResizeMode;
            int i15 = i12;
            return layout.copy(i10, i11, i15, i13, viewResizeMode2);
        }

        public final int component1() {
            return this.width;
        }

        public final int component2() {
            return this.height;
        }

        public final int component3() {
            return this.f9153x;
        }

        public final int component4() {
            return this.f9154y;
        }

        @NotNull
        public final ViewResizeMode component5() {
            return this.resizeMode;
        }

        @NotNull
        public final Layout copy(int i10, int i11, int i12, int i13, @NotNull ViewResizeMode resizeMode) {
            Intrinsics.checkNotNullParameter(resizeMode, "resizeMode");
            return new Layout(i10, i11, i12, i13, resizeMode);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Layout) {
                Layout layout = (Layout) obj;
                return this.width == layout.width && this.height == layout.height && this.f9153x == layout.f9153x && this.f9154y == layout.f9154y && this.resizeMode == layout.resizeMode;
            }
            return false;
        }

        public final int getHeight() {
            return this.height;
        }

        @NotNull
        public final ViewResizeMode getResizeMode() {
            return this.resizeMode;
        }

        public final int getWidth() {
            return this.width;
        }

        public final int getX() {
            return this.f9153x;
        }

        public final int getY() {
            return this.f9154y;
        }

        public int hashCode() {
            return (((((((Integer.hashCode(this.width) * 31) + Integer.hashCode(this.height)) * 31) + Integer.hashCode(this.f9153x)) * 31) + Integer.hashCode(this.f9154y)) * 31) + this.resizeMode.hashCode();
        }

        @NotNull
        public final WritableMap serialize() {
            return NativeMapExtensionsKt.nativeMapOf(v.a("width", Integer.valueOf(this.width)), v.a("height", Integer.valueOf(this.height)), v.a("x", Integer.valueOf(this.f9153x)), v.a("y", Integer.valueOf(this.f9154y)), v.a(ViewProps.RESIZE_MODE, this.resizeMode.getValue()));
        }

        @NotNull
        public String toString() {
            int i10 = this.width;
            int i11 = this.height;
            int i12 = this.f9153x;
            int i13 = this.f9154y;
            ViewResizeMode viewResizeMode = this.resizeMode;
            return "Layout(width=" + i10 + ", height=" + i11 + ", x=" + i12 + ", y=" + i13 + ", resizeMode=" + viewResizeMode + ")";
        }
    }

    public TapImageData(@NotNull String id2, int i10, @NotNull String type, @NotNull Layout layout, Double d10, Integer num, String str, Integer num2) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(layout, "layout");
        this.f9152id = id2;
        this.index = i10;
        this.type = type;
        this.layout = layout;
        this.portal = d10;
        this.embedIndex = num;
        this.componentId = str;
        this.componentMediaIndex = num2;
    }

    public static /* synthetic */ TapImageData copy$default(TapImageData tapImageData, String str, int i10, String str2, Layout layout, Double d10, Integer num, String str3, Integer num2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = tapImageData.f9152id;
        }
        if ((i11 & 2) != 0) {
            i10 = tapImageData.index;
        }
        if ((i11 & 4) != 0) {
            str2 = tapImageData.type;
        }
        if ((i11 & 8) != 0) {
            layout = tapImageData.layout;
        }
        if ((i11 & 16) != 0) {
            d10 = tapImageData.portal;
        }
        if ((i11 & 32) != 0) {
            num = tapImageData.embedIndex;
        }
        if ((i11 & 64) != 0) {
            str3 = tapImageData.componentId;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            num2 = tapImageData.componentMediaIndex;
        }
        String str4 = str3;
        Integer num3 = num2;
        Double d11 = d10;
        Integer num4 = num;
        return tapImageData.copy(str, i10, str2, layout, d11, num4, str4, num3);
    }

    @NotNull
    public final String component1() {
        return this.f9152id;
    }

    public final int component2() {
        return this.index;
    }

    @NotNull
    public final String component3() {
        return this.type;
    }

    @NotNull
    public final Layout component4() {
        return this.layout;
    }

    public final Double component5() {
        return this.portal;
    }

    public final Integer component6() {
        return this.embedIndex;
    }

    public final String component7() {
        return this.componentId;
    }

    public final Integer component8() {
        return this.componentMediaIndex;
    }

    @NotNull
    public final TapImageData copy(@NotNull String id2, int i10, @NotNull String type, @NotNull Layout layout, Double d10, Integer num, String str, Integer num2) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(layout, "layout");
        return new TapImageData(id2, i10, type, layout, d10, num, str, num2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapImageData) {
            TapImageData tapImageData = (TapImageData) obj;
            return Intrinsics.areEqual(this.f9152id, tapImageData.f9152id) && this.index == tapImageData.index && Intrinsics.areEqual(this.type, tapImageData.type) && Intrinsics.areEqual(this.layout, tapImageData.layout) && Intrinsics.areEqual((Object) this.portal, (Object) tapImageData.portal) && Intrinsics.areEqual(this.embedIndex, tapImageData.embedIndex) && Intrinsics.areEqual(this.componentId, tapImageData.componentId) && Intrinsics.areEqual(this.componentMediaIndex, tapImageData.componentMediaIndex);
        }
        return false;
    }

    public final String getComponentId() {
        return this.componentId;
    }

    public final Integer getComponentMediaIndex() {
        return this.componentMediaIndex;
    }

    public final Integer getEmbedIndex() {
        return this.embedIndex;
    }

    @NotNull
    public final String getId() {
        return this.f9152id;
    }

    public final int getIndex() {
        return this.index;
    }

    @NotNull
    public final Layout getLayout() {
        return this.layout;
    }

    public final Double getPortal() {
        return this.portal;
    }

    @NotNull
    public final String getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((((this.f9152id.hashCode() * 31) + Integer.hashCode(this.index)) * 31) + this.type.hashCode()) * 31) + this.layout.hashCode()) * 31;
        Double d10 = this.portal;
        int hashCode2 = (hashCode + (d10 == null ? 0 : d10.hashCode())) * 31;
        Integer num = this.embedIndex;
        int hashCode3 = (hashCode2 + (num == null ? 0 : num.hashCode())) * 31;
        String str = this.componentId;
        int hashCode4 = (hashCode3 + (str == null ? 0 : str.hashCode())) * 31;
        Integer num2 = this.componentMediaIndex;
        return hashCode4 + (num2 != null ? num2.hashCode() : 0);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a(StackTraceHelper.ID_KEY, this.f9152id), v.a("index", Integer.valueOf(this.index)), v.a("type", this.type), v.a("layout", this.layout.serialize()), v.a("portal", this.portal), v.a("embedIndex", this.embedIndex), v.a("componentId", this.componentId), v.a("componentMediaIndex", this.componentMediaIndex));
    }

    @NotNull
    public String toString() {
        String str = this.f9152id;
        int i10 = this.index;
        String str2 = this.type;
        Layout layout = this.layout;
        Double d10 = this.portal;
        Integer num = this.embedIndex;
        String str3 = this.componentId;
        Integer num2 = this.componentMediaIndex;
        return "TapImageData(id=" + str + ", index=" + i10 + ", type=" + str2 + ", layout=" + layout + ", portal=" + d10 + ", embedIndex=" + num + ", componentId=" + str3 + ", componentMediaIndex=" + num2 + ")";
    }
}
