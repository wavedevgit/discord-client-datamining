package com.discord.chat.bridge.botuikit;

import com.discord.chat.bridge.spoiler.SpoilerableData;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import gt.v1;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0010\u0001\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001d\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 A2\u00020\u00012\u00020\u0002:\u0002@AB[\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t\u0012\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0003\u0010\u000f\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0010\u0010\u0011B\u0081\u0001\b\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0004\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\u000e\u0010\b\u001a\n\u0012\u0004\u0012\u00020\n\u0018\u00010\t\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017¢\u0006\u0004\b\u0010\u0010\u0018J\t\u0010)\u001a\u00020\u0004HÆ\u0003J\t\u0010*\u001a\u00020\u0006HÆ\u0003J\u000b\u0010+\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\u000f\u0010,\u001a\b\u0012\u0004\u0012\u00020\n0\tHÆ\u0003J\u0010\u0010-\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010!J\t\u0010.\u001a\u00020\rHÆ\u0003J\u000b\u0010/\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\u0010\u00100\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010!Jl\u00101\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00062\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t2\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u00042\b\b\u0002\u0010\f\u001a\u00020\r2\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u00062\n\b\u0003\u0010\u000f\u001a\u0004\u0018\u00010\u0004HÆ\u0001¢\u0006\u0002\u00102J\u0013\u00103\u001a\u00020\r2\b\u00104\u001a\u0004\u0018\u000105HÖ\u0003J\t\u00106\u001a\u00020\u0004HÖ\u0001J\t\u00107\u001a\u00020\u0006HÖ\u0001J%\u00108\u001a\u0002092\u0006\u0010:\u001a\u00020\u00002\u0006\u0010;\u001a\u00020<2\u0006\u0010=\u001a\u00020>H\u0001¢\u0006\u0002\b?R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0014\u0010\u0005\u001a\u00020\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0016\u0010\u0007\u001a\u0004\u0018\u00010\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001cR\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0015\u0010\u000b\u001a\u0004\u0018\u00010\u0004¢\u0006\n\n\u0002\u0010\"\u001a\u0004\b \u0010!R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010#R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u001cR\u0015\u0010\u000f\u001a\u0004\u0018\u00010\u0004¢\u0006\n\n\u0002\u0010\"\u001a\u0004\b%\u0010!R\u0016\u0010\u0013\u001a\u0004\u0018\u00010\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\u001cR\u0016\u0010\u0014\u001a\u0004\u0018\u00010\u0015X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(¨\u0006B"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContainerComponent;", "Lcom/discord/chat/bridge/botuikit/BaseLayoutComponent;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "type", "", StackTraceHelper.ID_KEY, "", "errorText", "components", "", "Lcom/discord/chat/bridge/botuikit/Component;", "accentColor", "isSpoiler", "", "spoilerDescription", "themedBackgroundColor", "<init>", "(ILjava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/Integer;ZLjava/lang/String;Ljava/lang/Integer;)V", "seen0", "spoilerOrNull", "obscureOrNull", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/Integer;ZLjava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Void;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getId", "()Ljava/lang/String;", "getErrorText", "getComponents", "()Ljava/util/List;", "getAccentColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "()Z", "getSpoilerDescription", "getThemedBackgroundColor", "getSpoilerOrNull", "getObscureOrNull", "()Ljava/lang/Void;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "(ILjava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/Integer;ZLjava/lang/String;Ljava/lang/Integer;)Lcom/discord/chat/bridge/botuikit/ContainerComponent;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@dt.m
@SourceDebugExtension({"SMAP\nContainerComponent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ContainerComponent.kt\ncom/discord/chat/bridge/botuikit/ContainerComponent\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,24:1\n1#2:25\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContainerComponent extends BaseLayoutComponent implements SpoilerableData {
    private final Integer accentColor;
    @NotNull
    private final List<Component> components;
    private final String errorText;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8625id;
    private final boolean isSpoiler;
    private final Void obscureOrNull;
    private final String spoilerDescription;
    private final String spoilerOrNull;
    private final Integer themedBackgroundColor;
    private final int type;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, or.l.b(or.o.f44232e, new Function0() { // from class: com.discord.chat.bridge.botuikit.d
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = ContainerComponent._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null, null, null, null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContainerComponent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ContainerComponent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ContainerComponent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ ContainerComponent(int i10, int i11, String str, String str2, List list, Integer num, boolean z10, String str3, Integer num2, String str4, Void r12, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (107 != (i10 & 107)) {
            v1.b(i10, 107, ContainerComponent$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.f8625id = str;
        if ((i10 & 4) == 0) {
            this.errorText = null;
        } else {
            this.errorText = str2;
        }
        this.components = list;
        if ((i10 & 16) == 0) {
            this.accentColor = null;
        } else {
            this.accentColor = num;
        }
        this.isSpoiler = z10;
        this.spoilerDescription = str3;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.themedBackgroundColor = null;
        } else {
            this.themedBackgroundColor = num2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.spoilerOrNull = str3 == null || StringsKt.k0(str3) ? null : str3;
        } else {
            this.spoilerOrNull = str4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.obscureOrNull = null;
        } else {
            this.obscureOrNull = r12;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new gt.f(ComponentSerializer.INSTANCE);
    }

    public static /* synthetic */ ContainerComponent copy$default(ContainerComponent containerComponent, int i10, String str, String str2, List list, Integer num, boolean z10, String str3, Integer num2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = containerComponent.type;
        }
        if ((i11 & 2) != 0) {
            str = containerComponent.f8625id;
        }
        if ((i11 & 4) != 0) {
            str2 = containerComponent.errorText;
        }
        List<Component> list2 = list;
        if ((i11 & 8) != 0) {
            list2 = containerComponent.components;
        }
        if ((i11 & 16) != 0) {
            num = containerComponent.accentColor;
        }
        if ((i11 & 32) != 0) {
            z10 = containerComponent.isSpoiler;
        }
        if ((i11 & 64) != 0) {
            str3 = containerComponent.spoilerDescription;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            num2 = containerComponent.themedBackgroundColor;
        }
        String str4 = str3;
        Integer num3 = num2;
        Integer num4 = num;
        boolean z11 = z10;
        return containerComponent.copy(i10, str, str2, list2, num4, z11, str4, num3);
    }

    /* JADX WARN: Code restructure failed: missing block: B:32:0x008b, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r4, r5) == false) goto L32;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.botuikit.ContainerComponent r7, kotlinx.serialization.encoding.CompositeEncoder r8, kotlinx.serialization.descriptors.SerialDescriptor r9) {
        /*
            kotlin.Lazy[] r0 = com.discord.chat.bridge.botuikit.ContainerComponent.$childSerializers
            int r1 = r7.getType()
            r2 = 0
            r8.v(r9, r2, r1)
            java.lang.String r1 = r7.getId()
            r3 = 1
            r8.x(r9, r3, r1)
            r1 = 2
            boolean r4 = r8.z(r9, r1)
            if (r4 == 0) goto L1a
            goto L20
        L1a:
            java.lang.String r4 = r7.getErrorText()
            if (r4 == 0) goto L29
        L20:
            gt.n2 r4 = gt.n2.f25302a
            java.lang.String r5 = r7.getErrorText()
            r8.A(r9, r1, r4, r5)
        L29:
            r1 = 3
            r0 = r0[r1]
            java.lang.Object r0 = r0.getValue()
            dt.o r0 = (dt.o) r0
            java.util.List<com.discord.chat.bridge.botuikit.Component> r4 = r7.components
            r8.l(r9, r1, r0, r4)
            r0 = 4
            boolean r1 = r8.z(r9, r0)
            if (r1 == 0) goto L3f
            goto L43
        L3f:
            java.lang.Integer r1 = r7.accentColor
            if (r1 == 0) goto L4a
        L43:
            gt.p0 r1 = gt.p0.f25318a
            java.lang.Integer r4 = r7.accentColor
            r8.A(r9, r0, r1, r4)
        L4a:
            r0 = 5
            boolean r1 = r7.isSpoiler
            r8.w(r9, r0, r1)
            gt.n2 r0 = gt.n2.f25302a
            java.lang.String r1 = r7.spoilerDescription
            r4 = 6
            r8.A(r9, r4, r0, r1)
            r1 = 7
            boolean r4 = r8.z(r9, r1)
            if (r4 == 0) goto L60
            goto L64
        L60:
            java.lang.Integer r4 = r7.themedBackgroundColor
            if (r4 == 0) goto L6b
        L64:
            gt.p0 r4 = gt.p0.f25318a
            java.lang.Integer r5 = r7.themedBackgroundColor
            r8.A(r9, r1, r4, r5)
        L6b:
            r1 = 8
            boolean r4 = r8.z(r9, r1)
            if (r4 == 0) goto L74
            goto L8d
        L74:
            java.lang.String r4 = r7.getSpoilerOrNull()
            java.lang.String r5 = r7.spoilerDescription
            if (r5 == 0) goto L82
            boolean r6 = kotlin.text.StringsKt.k0(r5)
            if (r6 == 0) goto L83
        L82:
            r2 = r3
        L83:
            if (r2 != 0) goto L86
            goto L87
        L86:
            r5 = 0
        L87:
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r4, r5)
            if (r2 != 0) goto L94
        L8d:
            java.lang.String r2 = r7.getSpoilerOrNull()
            r8.A(r9, r1, r0, r2)
        L94:
            r0 = 9
            boolean r1 = r8.z(r9, r0)
            if (r1 == 0) goto L9d
            goto La3
        L9d:
            java.lang.Void r1 = r7.m267getObscureOrNull()
            if (r1 == 0) goto Lac
        La3:
            gt.k1 r1 = gt.k1.f25285a
            java.lang.Void r7 = r7.m267getObscureOrNull()
            r8.A(r9, r0, r1, r7)
        Lac:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.botuikit.ContainerComponent.write$Self$chat_release(com.discord.chat.bridge.botuikit.ContainerComponent, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    public final int component1() {
        return this.type;
    }

    @NotNull
    public final String component2() {
        return this.f8625id;
    }

    public final String component3() {
        return this.errorText;
    }

    @NotNull
    public final List<Component> component4() {
        return this.components;
    }

    public final Integer component5() {
        return this.accentColor;
    }

    public final boolean component6() {
        return this.isSpoiler;
    }

    public final String component7() {
        return this.spoilerDescription;
    }

    public final Integer component8() {
        return this.themedBackgroundColor;
    }

    @NotNull
    public final ContainerComponent copy(int i10, @NotNull String id2, String str, @NotNull List<? extends Component> components, Integer num, boolean z10, String str2, Integer num2) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(components, "components");
        return new ContainerComponent(i10, id2, str, components, num, z10, str2, num2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ContainerComponent) {
            ContainerComponent containerComponent = (ContainerComponent) obj;
            return this.type == containerComponent.type && Intrinsics.areEqual(this.f8625id, containerComponent.f8625id) && Intrinsics.areEqual(this.errorText, containerComponent.errorText) && Intrinsics.areEqual(this.components, containerComponent.components) && Intrinsics.areEqual(this.accentColor, containerComponent.accentColor) && this.isSpoiler == containerComponent.isSpoiler && Intrinsics.areEqual(this.spoilerDescription, containerComponent.spoilerDescription) && Intrinsics.areEqual(this.themedBackgroundColor, containerComponent.themedBackgroundColor);
        }
        return false;
    }

    public final Integer getAccentColor() {
        return this.accentColor;
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
        return this.f8625id;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public /* bridge */ /* synthetic */ String getObscureOrNull() {
        return (String) m267getObscureOrNull();
    }

    public final String getSpoilerDescription() {
        return this.spoilerDescription;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    public final Integer getThemedBackgroundColor() {
        return this.themedBackgroundColor;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    public int getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((Integer.hashCode(this.type) * 31) + this.f8625id.hashCode()) * 31;
        String str = this.errorText;
        int hashCode2 = (((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.components.hashCode()) * 31;
        Integer num = this.accentColor;
        int hashCode3 = (((hashCode2 + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.isSpoiler)) * 31;
        String str2 = this.spoilerDescription;
        int hashCode4 = (hashCode3 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Integer num2 = this.themedBackgroundColor;
        return hashCode4 + (num2 != null ? num2.hashCode() : 0);
    }

    public final boolean isSpoiler() {
        return this.isSpoiler;
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        String str = this.f8625id;
        String str2 = this.errorText;
        List<Component> list = this.components;
        Integer num = this.accentColor;
        boolean z10 = this.isSpoiler;
        String str3 = this.spoilerDescription;
        Integer num2 = this.themedBackgroundColor;
        return "ContainerComponent(type=" + i10 + ", id=" + str + ", errorText=" + str2 + ", components=" + list + ", accentColor=" + num + ", isSpoiler=" + z10 + ", spoilerDescription=" + str3 + ", themedBackgroundColor=" + num2 + ")";
    }

    /* renamed from: getObscureOrNull  reason: collision with other method in class */
    public Void m267getObscureOrNull() {
        return this.obscureOrNull;
    }

    public /* synthetic */ ContainerComponent(int i10, String str, String str2, List list, Integer num, boolean z10, String str3, Integer num2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, (i11 & 4) != 0 ? null : str2, list, (i11 & 16) != 0 ? null : num, z10, str3, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : num2);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public ContainerComponent(int i10, @NotNull String id2, String str, @NotNull List<? extends Component> components, Integer num, boolean z10, String str2, Integer num2) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(components, "components");
        this.type = i10;
        this.f8625id = id2;
        this.errorText = str;
        this.components = components;
        this.accentColor = num;
        this.isSpoiler = z10;
        this.spoilerDescription = str2;
        this.themedBackgroundColor = num2;
        this.spoilerOrNull = str2 == null || StringsKt.k0(str2) ? null : str2;
    }
}
