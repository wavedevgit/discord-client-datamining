package com.discord.chat.bridge.botuikit;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import jt.n2;
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
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 +2\u00020\u0001:\u0002*+B1\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b¢\u0006\u0004\b\n\u0010\u000bBG\b\u0010\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000f\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\t0\bHÆ\u0003J9\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00052\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bHÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020\u0003HÖ\u0001J\t\u0010!\u001a\u00020\u0005HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0006\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0017\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016¨\u0006,"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ActionRowComponent;", "Lcom/discord/chat/bridge/botuikit/BaseLayoutComponent;", "type", "", StackTraceHelper.ID_KEY, "", "errorText", "components", "", "Lcom/discord/chat/bridge/botuikit/Component;", "<init>", "(ILjava/lang/String;Ljava/lang/String;Ljava/util/List;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Ljava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getId", "()Ljava/lang/String;", "getErrorText", "getComponents", "()Ljava/util/List;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ActionRowComponent extends BaseLayoutComponent {
    @NotNull
    private final List<Component> components;
    private final String errorText;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8519id;
    private final int type;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, qr.l.b(qr.o.f48044e, new Function0() { // from class: com.discord.chat.bridge.botuikit.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = ActionRowComponent._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ActionRowComponent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ActionRowComponent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ActionRowComponent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ ActionRowComponent(int i10, int i11, String str, String str2, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (11 != (i10 & 11)) {
            v1.b(i10, 11, ActionRowComponent$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.f8519id = str;
        if ((i10 & 4) == 0) {
            this.errorText = null;
        } else {
            this.errorText = str2;
        }
        this.components = list;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new jt.f(ComponentSerializer.INSTANCE);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ ActionRowComponent copy$default(ActionRowComponent actionRowComponent, int i10, String str, String str2, List list, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = actionRowComponent.type;
        }
        if ((i11 & 2) != 0) {
            str = actionRowComponent.f8519id;
        }
        if ((i11 & 4) != 0) {
            str2 = actionRowComponent.errorText;
        }
        if ((i11 & 8) != 0) {
            list = actionRowComponent.components;
        }
        return actionRowComponent.copy(i10, str, str2, list);
    }

    public static final /* synthetic */ void write$Self$chat_release(ActionRowComponent actionRowComponent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.x(serialDescriptor, 0, actionRowComponent.getType());
        compositeEncoder.z(serialDescriptor, 1, actionRowComponent.getId());
        if (compositeEncoder.A(serialDescriptor, 2) || actionRowComponent.getErrorText() != null) {
            compositeEncoder.l(serialDescriptor, 2, n2.f31041a, actionRowComponent.getErrorText());
        }
        compositeEncoder.s(serialDescriptor, 3, (ft.o) lazyArr[3].getValue(), actionRowComponent.components);
    }

    public final int component1() {
        return this.type;
    }

    @NotNull
    public final String component2() {
        return this.f8519id;
    }

    public final String component3() {
        return this.errorText;
    }

    @NotNull
    public final List<Component> component4() {
        return this.components;
    }

    @NotNull
    public final ActionRowComponent copy(int i10, @NotNull String id2, String str, @NotNull List<? extends Component> components) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(components, "components");
        return new ActionRowComponent(i10, id2, str, components);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ActionRowComponent) {
            ActionRowComponent actionRowComponent = (ActionRowComponent) obj;
            return this.type == actionRowComponent.type && Intrinsics.areEqual(this.f8519id, actionRowComponent.f8519id) && Intrinsics.areEqual(this.errorText, actionRowComponent.errorText) && Intrinsics.areEqual(this.components, actionRowComponent.components);
        }
        return false;
    }

    @NotNull
    public final List<Component> getComponents() {
        return this.components;
    }

    @Override // com.discord.chat.bridge.botuikit.BaseLayoutComponent
    public String getErrorText() {
        return this.errorText;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    @NotNull
    public String getId() {
        return this.f8519id;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    public int getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((Integer.hashCode(this.type) * 31) + this.f8519id.hashCode()) * 31;
        String str = this.errorText;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.components.hashCode();
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        String str = this.f8519id;
        String str2 = this.errorText;
        List<Component> list = this.components;
        return "ActionRowComponent(type=" + i10 + ", id=" + str + ", errorText=" + str2 + ", components=" + list + ")";
    }

    public /* synthetic */ ActionRowComponent(int i10, String str, String str2, List list, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, (i11 & 4) != 0 ? null : str2, list);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public ActionRowComponent(int i10, @NotNull String id2, String str, @NotNull List<? extends Component> components) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(components, "components");
        this.type = i10;
        this.f8519id = id2;
        this.errorText = str;
        this.components = components;
    }
}
