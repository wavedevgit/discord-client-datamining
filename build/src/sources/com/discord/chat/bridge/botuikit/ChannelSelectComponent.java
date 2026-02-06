package com.discord.chat.bridge.botuikit;

import com.discord.chat.bridge.botuikit.ActionComponentState;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import java.util.List;
import jt.n2;
import jt.p0;
import jt.v1;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ft.m
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u001f\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 C2\u00020\u0001:\u0002BCBy\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\b\b\u0002\u0010\r\u001a\u00020\u000e\u0012\f\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010\u0012\u0010\b\u0002\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0010¢\u0006\u0004\b\u0013\u0010\u0014B\u008d\u0001\b\u0010\u0012\u0006\u0010\u0015\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\u000e\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010\u0012\u000e\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0010\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017¢\u0006\u0004\b\u0013\u0010\u0018J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u0005HÆ\u0003J\t\u0010+\u001a\u00020\u0007HÆ\u0003J\t\u0010,\u001a\u00020\u0005HÆ\u0003J\u000b\u0010-\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010.\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\t\u0010/\u001a\u00020\u0003HÆ\u0003J\t\u00100\u001a\u00020\u0003HÆ\u0003J\t\u00101\u001a\u00020\u000eHÆ\u0003J\u000f\u00102\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010HÆ\u0003J\u0011\u00103\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0010HÆ\u0003J\u0089\u0001\u00104\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\u000b\u001a\u00020\u00032\b\b\u0002\u0010\f\u001a\u00020\u00032\b\b\u0002\u0010\r\u001a\u00020\u000e2\u000e\b\u0002\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00110\u00102\u0010\b\u0002\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0010HÆ\u0001J\u0013\u00105\u001a\u00020\u000e2\b\u00106\u001a\u0004\u0018\u000107HÖ\u0003J\t\u00108\u001a\u00020\u0003HÖ\u0001J\t\u00109\u001a\u00020\u0005HÖ\u0001J%\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u00020\u00002\u0006\u0010=\u001a\u00020>2\u0006\u0010?\u001a\u00020@H\u0001¢\u0006\u0002\bAR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0014\u0010\b\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u001cR\u0016\u0010\t\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001cR\u0016\u0010\n\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001cR\u0014\u0010\u000b\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u001aR\u0014\u0010\f\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\u001aR\u0014\u0010\r\u001a\u00020\u000eX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b$\u0010%R\u001a\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b&\u0010'R\u0019\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b(\u0010'¨\u0006D"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ChannelSelectComponent;", "Lcom/discord/chat/bridge/botuikit/SearchableSelectComponent;", "type", "", StackTraceHelper.ID_KEY, "", "state", "Lcom/discord/chat/bridge/botuikit/ActionComponentState;", "customId", ReactTextInputShadowNode.PROP_PLACEHOLDER, ViewProps.ACCESSIBILITY_LABEL, "minValues", "maxValues", "disabled", "", "selectedOptions", "", "Lcom/discord/chat/bridge/botuikit/SearchableSelectItem;", "channelTypes", "<init>", "(ILjava/lang/String;Lcom/discord/chat/bridge/botuikit/ActionComponentState;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;IIZLjava/util/List;Ljava/util/List;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Lcom/discord/chat/bridge/botuikit/ActionComponentState;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;IIZLjava/util/List;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getId", "()Ljava/lang/String;", "getState", "()Lcom/discord/chat/bridge/botuikit/ActionComponentState;", "getCustomId", "getPlaceholder", "getAccessibilityLabel", "getMinValues", "getMaxValues", "getDisabled", "()Z", "getSelectedOptions", "()Ljava/util/List;", "getChannelTypes", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelSelectComponent extends SearchableSelectComponent {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String accessibilityLabel;
    private final List<Integer> channelTypes;
    @NotNull
    private final String customId;
    private final boolean disabled;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8521id;
    private final int maxValues;
    private final int minValues;
    private final String placeholder;
    @NotNull
    private final List<SearchableSelectItem> selectedOptions;
    @NotNull
    private final ActionComponentState state;
    private final int type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ChannelSelectComponent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ChannelSelectComponent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ChannelSelectComponent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        qr.o oVar = qr.o.f48044e;
        $childSerializers = new Lazy[]{null, null, null, null, null, null, null, null, null, qr.l.b(oVar, new Function0() { // from class: com.discord.chat.bridge.botuikit.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = ChannelSelectComponent._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), qr.l.b(oVar, new Function0() { // from class: com.discord.chat.bridge.botuikit.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = ChannelSelectComponent._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        })};
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ ChannelSelectComponent(int i10, int i11, String str, ActionComponentState actionComponentState, String str2, String str3, String str4, int i12, int i13, boolean z10, List list, List list2, SerializationConstructorMarker serializationConstructorMarker) {
        super(i10, serializationConstructorMarker);
        if (719 != (i10 & 719)) {
            v1.b(i10, 719, ChannelSelectComponent$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.f8521id = str;
        this.state = actionComponentState;
        this.customId = str2;
        if ((i10 & 16) == 0) {
            this.placeholder = null;
        } else {
            this.placeholder = str3;
        }
        if ((i10 & 32) == 0) {
            this.accessibilityLabel = null;
        } else {
            this.accessibilityLabel = str4;
        }
        this.minValues = i12;
        this.maxValues = i13;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.disabled = false;
        } else {
            this.disabled = z10;
        }
        this.selectedOptions = list;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.channelTypes = null;
        } else {
            this.channelTypes = list2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new jt.f(SearchableSelectItem$$serializer.INSTANCE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new jt.f(p0.f31057a);
    }

    public static /* synthetic */ ChannelSelectComponent copy$default(ChannelSelectComponent channelSelectComponent, int i10, String str, ActionComponentState actionComponentState, String str2, String str3, String str4, int i11, int i12, boolean z10, List list, List list2, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = channelSelectComponent.type;
        }
        if ((i13 & 2) != 0) {
            str = channelSelectComponent.f8521id;
        }
        if ((i13 & 4) != 0) {
            actionComponentState = channelSelectComponent.state;
        }
        if ((i13 & 8) != 0) {
            str2 = channelSelectComponent.customId;
        }
        if ((i13 & 16) != 0) {
            str3 = channelSelectComponent.placeholder;
        }
        if ((i13 & 32) != 0) {
            str4 = channelSelectComponent.accessibilityLabel;
        }
        if ((i13 & 64) != 0) {
            i11 = channelSelectComponent.minValues;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            i12 = channelSelectComponent.maxValues;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z10 = channelSelectComponent.disabled;
        }
        List<SearchableSelectItem> list3 = list;
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            list3 = channelSelectComponent.selectedOptions;
        }
        List<Integer> list4 = list2;
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            list4 = channelSelectComponent.channelTypes;
        }
        List list5 = list3;
        List list6 = list4;
        int i14 = i12;
        boolean z11 = z10;
        String str5 = str4;
        int i15 = i11;
        String str6 = str3;
        ActionComponentState actionComponentState2 = actionComponentState;
        return channelSelectComponent.copy(i10, str, actionComponentState2, str2, str6, str5, i15, i14, z11, list5, list6);
    }

    public static final /* synthetic */ void write$Self$chat_release(ChannelSelectComponent channelSelectComponent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        SearchableSelectComponent.write$Self((SearchableSelectComponent) channelSelectComponent, compositeEncoder, serialDescriptor);
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.x(serialDescriptor, 0, channelSelectComponent.getType());
        compositeEncoder.z(serialDescriptor, 1, channelSelectComponent.getId());
        compositeEncoder.s(serialDescriptor, 2, ActionComponentState.Serializer.INSTANCE, channelSelectComponent.getState());
        compositeEncoder.z(serialDescriptor, 3, channelSelectComponent.getCustomId());
        if (compositeEncoder.A(serialDescriptor, 4) || channelSelectComponent.getPlaceholder() != null) {
            compositeEncoder.l(serialDescriptor, 4, n2.f31041a, channelSelectComponent.getPlaceholder());
        }
        if (compositeEncoder.A(serialDescriptor, 5) || channelSelectComponent.getAccessibilityLabel() != null) {
            compositeEncoder.l(serialDescriptor, 5, n2.f31041a, channelSelectComponent.getAccessibilityLabel());
        }
        compositeEncoder.x(serialDescriptor, 6, channelSelectComponent.getMinValues());
        compositeEncoder.x(serialDescriptor, 7, channelSelectComponent.getMaxValues());
        if (compositeEncoder.A(serialDescriptor, 8) || channelSelectComponent.getDisabled()) {
            compositeEncoder.y(serialDescriptor, 8, channelSelectComponent.getDisabled());
        }
        compositeEncoder.s(serialDescriptor, 9, (ft.o) lazyArr[9].getValue(), channelSelectComponent.getSelectedOptions());
        if (compositeEncoder.A(serialDescriptor, 10) || channelSelectComponent.channelTypes != null) {
            compositeEncoder.l(serialDescriptor, 10, (ft.o) lazyArr[10].getValue(), channelSelectComponent.channelTypes);
        }
    }

    public final int component1() {
        return this.type;
    }

    @NotNull
    public final List<SearchableSelectItem> component10() {
        return this.selectedOptions;
    }

    public final List<Integer> component11() {
        return this.channelTypes;
    }

    @NotNull
    public final String component2() {
        return this.f8521id;
    }

    @NotNull
    public final ActionComponentState component3() {
        return this.state;
    }

    @NotNull
    public final String component4() {
        return this.customId;
    }

    public final String component5() {
        return this.placeholder;
    }

    public final String component6() {
        return this.accessibilityLabel;
    }

    public final int component7() {
        return this.minValues;
    }

    public final int component8() {
        return this.maxValues;
    }

    public final boolean component9() {
        return this.disabled;
    }

    @NotNull
    public final ChannelSelectComponent copy(int i10, @NotNull String id2, @NotNull ActionComponentState state, @NotNull String customId, String str, String str2, int i11, int i12, boolean z10, @NotNull List<SearchableSelectItem> selectedOptions, List<Integer> list) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(customId, "customId");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        return new ChannelSelectComponent(i10, id2, state, customId, str, str2, i11, i12, z10, selectedOptions, list);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ChannelSelectComponent) {
            ChannelSelectComponent channelSelectComponent = (ChannelSelectComponent) obj;
            return this.type == channelSelectComponent.type && Intrinsics.areEqual(this.f8521id, channelSelectComponent.f8521id) && this.state == channelSelectComponent.state && Intrinsics.areEqual(this.customId, channelSelectComponent.customId) && Intrinsics.areEqual(this.placeholder, channelSelectComponent.placeholder) && Intrinsics.areEqual(this.accessibilityLabel, channelSelectComponent.accessibilityLabel) && this.minValues == channelSelectComponent.minValues && this.maxValues == channelSelectComponent.maxValues && this.disabled == channelSelectComponent.disabled && Intrinsics.areEqual(this.selectedOptions, channelSelectComponent.selectedOptions) && Intrinsics.areEqual(this.channelTypes, channelSelectComponent.channelTypes);
        }
        return false;
    }

    @Override // com.discord.chat.bridge.botuikit.SelectComponent
    public String getAccessibilityLabel() {
        return this.accessibilityLabel;
    }

    public final List<Integer> getChannelTypes() {
        return this.channelTypes;
    }

    @Override // com.discord.chat.bridge.botuikit.BaseActionComponent
    @NotNull
    public String getCustomId() {
        return this.customId;
    }

    @Override // com.discord.chat.bridge.botuikit.SelectComponent
    public boolean getDisabled() {
        return this.disabled;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    @NotNull
    public String getId() {
        return this.f8521id;
    }

    @Override // com.discord.chat.bridge.botuikit.SelectComponent
    public int getMaxValues() {
        return this.maxValues;
    }

    @Override // com.discord.chat.bridge.botuikit.SelectComponent
    public int getMinValues() {
        return this.minValues;
    }

    @Override // com.discord.chat.bridge.botuikit.SelectComponent
    public String getPlaceholder() {
        return this.placeholder;
    }

    @Override // com.discord.chat.bridge.botuikit.SearchableSelectComponent
    @NotNull
    public List<SearchableSelectItem> getSelectedOptions() {
        return this.selectedOptions;
    }

    @Override // com.discord.chat.bridge.botuikit.BaseActionComponent
    @NotNull
    public ActionComponentState getState() {
        return this.state;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    public int getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((((Integer.hashCode(this.type) * 31) + this.f8521id.hashCode()) * 31) + this.state.hashCode()) * 31) + this.customId.hashCode()) * 31;
        String str = this.placeholder;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.accessibilityLabel;
        int hashCode3 = (((((((((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + Integer.hashCode(this.minValues)) * 31) + Integer.hashCode(this.maxValues)) * 31) + Boolean.hashCode(this.disabled)) * 31) + this.selectedOptions.hashCode()) * 31;
        List<Integer> list = this.channelTypes;
        return hashCode3 + (list != null ? list.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        String str = this.f8521id;
        ActionComponentState actionComponentState = this.state;
        String str2 = this.customId;
        String str3 = this.placeholder;
        String str4 = this.accessibilityLabel;
        int i11 = this.minValues;
        int i12 = this.maxValues;
        boolean z10 = this.disabled;
        List<SearchableSelectItem> list = this.selectedOptions;
        List<Integer> list2 = this.channelTypes;
        return "ChannelSelectComponent(type=" + i10 + ", id=" + str + ", state=" + actionComponentState + ", customId=" + str2 + ", placeholder=" + str3 + ", accessibilityLabel=" + str4 + ", minValues=" + i11 + ", maxValues=" + i12 + ", disabled=" + z10 + ", selectedOptions=" + list + ", channelTypes=" + list2 + ")";
    }

    public /* synthetic */ ChannelSelectComponent(int i10, String str, ActionComponentState actionComponentState, String str2, String str3, String str4, int i11, int i12, boolean z10, List list, List list2, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, actionComponentState, str2, (i13 & 16) != 0 ? null : str3, (i13 & 32) != 0 ? null : str4, i11, i12, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z10, list, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : list2);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChannelSelectComponent(int i10, @NotNull String id2, @NotNull ActionComponentState state, @NotNull String customId, String str, String str2, int i11, int i12, boolean z10, @NotNull List<SearchableSelectItem> selectedOptions, List<Integer> list) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(customId, "customId");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        this.type = i10;
        this.f8521id = id2;
        this.state = state;
        this.customId = customId;
        this.placeholder = str;
        this.accessibilityLabel = str2;
        this.minValues = i11;
        this.maxValues = i12;
        this.disabled = z10;
        this.selectedOptions = selectedOptions;
        this.channelTypes = list;
    }
}
