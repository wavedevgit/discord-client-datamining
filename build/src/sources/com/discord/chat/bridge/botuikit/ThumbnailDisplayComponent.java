package com.discord.chat.bridge.botuikit;

import bt.v1;
import com.discord.chat.bridge.media.UnfurledMediaItem;
import com.discord.chat.bridge.spoiler.SpoilerableData;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@ys.m
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b&\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 N2\u00020\u00012\u00020\u0002:\u0002MNB\u0081\u0001\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\r\u001a\u00020\u000b\u0012\u0006\u0010\u000e\u001a\u00020\u000b\u0012\u0006\u0010\u000f\u001a\u00020\u000b\u0012\u0006\u0010\u0010\u001a\u00020\u000b\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u000b\u0012\u0006\u0010\u0013\u001a\u00020\u0006\u0012\u0006\u0010\u0014\u001a\u00020\u0006¢\u0006\u0004\b\u0015\u0010\u0016B¯\u0001\b\u0010\u0012\u0006\u0010\u0017\u001a\u00020\u0004\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\r\u001a\u00020\u000b\u0012\u0006\u0010\u000e\u001a\u00020\u000b\u0012\u0006\u0010\u000f\u001a\u00020\u000b\u0012\u0006\u0010\u0010\u001a\u00020\u000b\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u001b¢\u0006\u0004\b\u0015\u0010\u001cJ\t\u00100\u001a\u00020\u0004HÆ\u0003J\t\u00101\u001a\u00020\u0006HÆ\u0003J\t\u00102\u001a\u00020\bHÆ\u0003J\u000b\u00103\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\t\u00104\u001a\u00020\u000bHÆ\u0003J\u000b\u00105\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\t\u00106\u001a\u00020\u000bHÆ\u0003J\t\u00107\u001a\u00020\u000bHÆ\u0003J\t\u00108\u001a\u00020\u000bHÆ\u0003J\t\u00109\u001a\u00020\u000bHÆ\u0003J\u000b\u0010:\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\u0010\u0010;\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010*J\t\u0010<\u001a\u00020\u0006HÆ\u0003J\t\u0010=\u001a\u00020\u0006HÆ\u0003J¢\u0001\u0010>\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00062\b\b\u0002\u0010\n\u001a\u00020\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00062\b\b\u0002\u0010\r\u001a\u00020\u000b2\b\b\u0002\u0010\u000e\u001a\u00020\u000b2\b\b\u0002\u0010\u000f\u001a\u00020\u000b2\b\b\u0002\u0010\u0010\u001a\u00020\u000b2\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u000b2\b\b\u0002\u0010\u0013\u001a\u00020\u00062\b\b\u0002\u0010\u0014\u001a\u00020\u0006HÆ\u0001¢\u0006\u0002\u0010?J\u0013\u0010@\u001a\u00020\u000b2\b\u0010A\u001a\u0004\u0018\u00010BHÖ\u0003J\t\u0010C\u001a\u00020\u0004HÖ\u0001J\t\u0010D\u001a\u00020\u0006HÖ\u0001J%\u0010E\u001a\u00020F2\u0006\u0010G\u001a\u00020\u00002\u0006\u0010H\u001a\u00020I2\u0006\u0010J\u001a\u00020KH\u0001¢\u0006\u0002\bLR\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0014\u0010\u0005\u001a\u00020\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b#\u0010 R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010$R\u0013\u0010\f\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b%\u0010 R\u0011\u0010\r\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010$R\u0011\u0010\u000e\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010$R\u0011\u0010\u000f\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b&\u0010$R\u0011\u0010\u0010\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b'\u0010$R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b(\u0010 R\u0015\u0010\u0012\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010+\u001a\u0004\b)\u0010*R\u0011\u0010\u0013\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b,\u0010 R\u0011\u0010\u0014\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b-\u0010 R\u0016\u0010\u0018\u001a\u0004\u0018\u00010\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b.\u0010 R\u0016\u0010\u0019\u001a\u0004\u0018\u00010\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b/\u0010 ¨\u0006O"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent;", "Lcom/discord/chat/bridge/botuikit/Component;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "type", "", StackTraceHelper.ID_KEY, "", "media", "Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "description", "isSpoiler", "", "spoilerDescription", "isObscure", "isObscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "obscureDescription", "verifyAge", "descriptionHint", ViewProps.ACCESSIBILITY_ROLE, "<init>", "(ILjava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaItem;Ljava/lang/String;ZLjava/lang/String;ZZZZLjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "spoilerOrNull", "obscureOrNull", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaItem;Ljava/lang/String;ZLjava/lang/String;ZZZZLjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getId", "()Ljava/lang/String;", "getMedia", "()Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "getDescription", "()Z", "getSpoilerDescription", "getObscureHideControls", "getObscureIsOpaque", "getObscureDescription", "getVerifyAge", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getDescriptionHint", "getAccessibilityRole", "getSpoilerOrNull", "getObscureOrNull", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "copy", "(ILjava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaItem;Ljava/lang/String;ZLjava/lang/String;ZZZZLjava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nThumbnailDisplayComponent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ThumbnailDisplayComponent.kt\ncom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,30:1\n1#2:31\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThumbnailDisplayComponent extends Component implements SpoilerableData {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String accessibilityRole;
    private final String description;
    @NotNull
    private final String descriptionHint;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f9287id;
    private final boolean isObscure;
    private final boolean isObscureAwaitingScan;
    private final boolean isSpoiler;
    @NotNull
    private final UnfurledMediaItem media;
    private final String obscureDescription;
    private final boolean obscureHideControls;
    private final boolean obscureIsOpaque;
    private final String obscureOrNull;
    private final String spoilerDescription;
    private final String spoilerOrNull;
    private final int type;
    private final Boolean verifyAge;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ThumbnailDisplayComponent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ ThumbnailDisplayComponent(int i10, int i11, String str, UnfurledMediaItem unfurledMediaItem, String str2, boolean z10, String str3, boolean z11, boolean z12, boolean z13, boolean z14, String str4, Boolean bool, String str5, String str6, String str7, String str8, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (16375 != (i10 & 16375)) {
            v1.b(i10, 16375, ThumbnailDisplayComponent$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.f9287id = str;
        this.media = unfurledMediaItem;
        if ((i10 & 8) == 0) {
            this.description = null;
        } else {
            this.description = str2;
        }
        this.isSpoiler = z10;
        this.spoilerDescription = str3;
        this.isObscure = z11;
        this.isObscureAwaitingScan = z12;
        this.obscureHideControls = z13;
        this.obscureIsOpaque = z14;
        this.obscureDescription = str4;
        this.verifyAge = bool;
        this.descriptionHint = str5;
        this.accessibilityRole = str6;
        boolean z15 = true;
        if ((i10 & 16384) == 0) {
            this.spoilerOrNull = str3 == null || StringsKt.k0(str3) ? null : str3;
        } else {
            this.spoilerOrNull = str7;
        }
        if ((i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0) {
            this.obscureOrNull = str8;
            return;
        }
        if (str4 != null && !StringsKt.k0(str4)) {
            z15 = false;
        }
        this.obscureOrNull = !z15 ? str4 : null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:22:0x0095, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r4, r6) == false) goto L32;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.botuikit.ThumbnailDisplayComponent r8, kotlinx.serialization.encoding.CompositeEncoder r9, kotlinx.serialization.descriptors.SerialDescriptor r10) {
        /*
            int r0 = r8.getType()
            r1 = 0
            r9.v(r10, r1, r0)
            java.lang.String r0 = r8.getId()
            r2 = 1
            r9.x(r10, r2, r0)
            com.discord.chat.bridge.media.UnfurledMediaItem$$serializer r0 = com.discord.chat.bridge.media.UnfurledMediaItem$$serializer.INSTANCE
            com.discord.chat.bridge.media.UnfurledMediaItem r3 = r8.media
            r4 = 2
            r9.m(r10, r4, r0, r3)
            r0 = 3
            boolean r3 = r9.y(r10, r0)
            if (r3 == 0) goto L20
            goto L24
        L20:
            java.lang.String r3 = r8.description
            if (r3 == 0) goto L2b
        L24:
            bt.n2 r3 = bt.n2.f7662a
            java.lang.String r4 = r8.description
            r9.B(r10, r0, r3, r4)
        L2b:
            r0 = 4
            boolean r3 = r8.isSpoiler
            r9.w(r10, r0, r3)
            bt.n2 r0 = bt.n2.f7662a
            java.lang.String r3 = r8.spoilerDescription
            r4 = 5
            r9.B(r10, r4, r0, r3)
            r3 = 6
            boolean r4 = r8.isObscure
            r9.w(r10, r3, r4)
            r3 = 7
            boolean r4 = r8.isObscureAwaitingScan
            r9.w(r10, r3, r4)
            r3 = 8
            boolean r4 = r8.obscureHideControls
            r9.w(r10, r3, r4)
            r3 = 9
            boolean r4 = r8.obscureIsOpaque
            r9.w(r10, r3, r4)
            r3 = 10
            java.lang.String r4 = r8.obscureDescription
            r9.B(r10, r3, r0, r4)
            bt.h r3 = bt.h.f7626a
            java.lang.Boolean r4 = r8.verifyAge
            r5 = 11
            r9.B(r10, r5, r3, r4)
            r3 = 12
            java.lang.String r4 = r8.descriptionHint
            r9.x(r10, r3, r4)
            r3 = 13
            java.lang.String r4 = r8.accessibilityRole
            r9.x(r10, r3, r4)
            r3 = 14
            boolean r4 = r9.y(r10, r3)
            r5 = 0
            if (r4 == 0) goto L7b
            goto L97
        L7b:
            java.lang.String r4 = r8.getSpoilerOrNull()
            java.lang.String r6 = r8.spoilerDescription
            if (r6 == 0) goto L8c
            boolean r7 = kotlin.text.StringsKt.k0(r6)
            if (r7 == 0) goto L8a
            goto L8c
        L8a:
            r7 = r1
            goto L8d
        L8c:
            r7 = r2
        L8d:
            if (r7 != 0) goto L90
            goto L91
        L90:
            r6 = r5
        L91:
            boolean r4 = kotlin.jvm.internal.Intrinsics.areEqual(r4, r6)
            if (r4 != 0) goto L9e
        L97:
            java.lang.String r4 = r8.getSpoilerOrNull()
            r9.B(r10, r3, r0, r4)
        L9e:
            r3 = 15
            boolean r4 = r9.y(r10, r3)
            if (r4 == 0) goto La7
            goto Lbf
        La7:
            java.lang.String r4 = r8.getObscureOrNull()
            java.lang.String r6 = r8.obscureDescription
            if (r6 == 0) goto Lb5
            boolean r7 = kotlin.text.StringsKt.k0(r6)
            if (r7 == 0) goto Lb6
        Lb5:
            r1 = r2
        Lb6:
            if (r1 != 0) goto Lb9
            r5 = r6
        Lb9:
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r4, r5)
            if (r1 != 0) goto Lc6
        Lbf:
            java.lang.String r8 = r8.getObscureOrNull()
            r9.B(r10, r3, r0, r8)
        Lc6:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.botuikit.ThumbnailDisplayComponent.write$Self$chat_release(com.discord.chat.bridge.botuikit.ThumbnailDisplayComponent, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    public final int component1() {
        return this.type;
    }

    public final boolean component10() {
        return this.obscureIsOpaque;
    }

    public final String component11() {
        return this.obscureDescription;
    }

    public final Boolean component12() {
        return this.verifyAge;
    }

    @NotNull
    public final String component13() {
        return this.descriptionHint;
    }

    @NotNull
    public final String component14() {
        return this.accessibilityRole;
    }

    @NotNull
    public final String component2() {
        return this.f9287id;
    }

    @NotNull
    public final UnfurledMediaItem component3() {
        return this.media;
    }

    public final String component4() {
        return this.description;
    }

    public final boolean component5() {
        return this.isSpoiler;
    }

    public final String component6() {
        return this.spoilerDescription;
    }

    public final boolean component7() {
        return this.isObscure;
    }

    public final boolean component8() {
        return this.isObscureAwaitingScan;
    }

    public final boolean component9() {
        return this.obscureHideControls;
    }

    @NotNull
    public final ThumbnailDisplayComponent copy(int i10, @NotNull String id2, @NotNull UnfurledMediaItem media, String str, boolean z10, String str2, boolean z11, boolean z12, boolean z13, boolean z14, String str3, Boolean bool, @NotNull String descriptionHint, @NotNull String accessibilityRole) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(media, "media");
        Intrinsics.checkNotNullParameter(descriptionHint, "descriptionHint");
        Intrinsics.checkNotNullParameter(accessibilityRole, "accessibilityRole");
        return new ThumbnailDisplayComponent(i10, id2, media, str, z10, str2, z11, z12, z13, z14, str3, bool, descriptionHint, accessibilityRole);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ThumbnailDisplayComponent) {
            ThumbnailDisplayComponent thumbnailDisplayComponent = (ThumbnailDisplayComponent) obj;
            return this.type == thumbnailDisplayComponent.type && Intrinsics.areEqual(this.f9287id, thumbnailDisplayComponent.f9287id) && Intrinsics.areEqual(this.media, thumbnailDisplayComponent.media) && Intrinsics.areEqual(this.description, thumbnailDisplayComponent.description) && this.isSpoiler == thumbnailDisplayComponent.isSpoiler && Intrinsics.areEqual(this.spoilerDescription, thumbnailDisplayComponent.spoilerDescription) && this.isObscure == thumbnailDisplayComponent.isObscure && this.isObscureAwaitingScan == thumbnailDisplayComponent.isObscureAwaitingScan && this.obscureHideControls == thumbnailDisplayComponent.obscureHideControls && this.obscureIsOpaque == thumbnailDisplayComponent.obscureIsOpaque && Intrinsics.areEqual(this.obscureDescription, thumbnailDisplayComponent.obscureDescription) && Intrinsics.areEqual(this.verifyAge, thumbnailDisplayComponent.verifyAge) && Intrinsics.areEqual(this.descriptionHint, thumbnailDisplayComponent.descriptionHint) && Intrinsics.areEqual(this.accessibilityRole, thumbnailDisplayComponent.accessibilityRole);
        }
        return false;
    }

    @NotNull
    public final String getAccessibilityRole() {
        return this.accessibilityRole;
    }

    public final String getDescription() {
        return this.description;
    }

    @NotNull
    public final String getDescriptionHint() {
        return this.descriptionHint;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    @NotNull
    public String getId() {
        return this.f9287id;
    }

    @NotNull
    public final UnfurledMediaItem getMedia() {
        return this.media;
    }

    public final String getObscureDescription() {
        return this.obscureDescription;
    }

    public final boolean getObscureHideControls() {
        return this.obscureHideControls;
    }

    public final boolean getObscureIsOpaque() {
        return this.obscureIsOpaque;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getObscureOrNull() {
        return this.obscureOrNull;
    }

    public final String getSpoilerDescription() {
        return this.spoilerDescription;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    public int getType() {
        return this.type;
    }

    public final Boolean getVerifyAge() {
        return this.verifyAge;
    }

    public int hashCode() {
        int hashCode = ((((Integer.hashCode(this.type) * 31) + this.f9287id.hashCode()) * 31) + this.media.hashCode()) * 31;
        String str = this.description;
        int hashCode2 = (((hashCode + (str == null ? 0 : str.hashCode())) * 31) + Boolean.hashCode(this.isSpoiler)) * 31;
        String str2 = this.spoilerDescription;
        int hashCode3 = (((((((((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + Boolean.hashCode(this.isObscure)) * 31) + Boolean.hashCode(this.isObscureAwaitingScan)) * 31) + Boolean.hashCode(this.obscureHideControls)) * 31) + Boolean.hashCode(this.obscureIsOpaque)) * 31;
        String str3 = this.obscureDescription;
        int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Boolean bool = this.verifyAge;
        return ((((hashCode4 + (bool != null ? bool.hashCode() : 0)) * 31) + this.descriptionHint.hashCode()) * 31) + this.accessibilityRole.hashCode();
    }

    public final boolean isObscure() {
        return this.isObscure;
    }

    public final boolean isObscureAwaitingScan() {
        return this.isObscureAwaitingScan;
    }

    public final boolean isSpoiler() {
        return this.isSpoiler;
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        String str = this.f9287id;
        UnfurledMediaItem unfurledMediaItem = this.media;
        String str2 = this.description;
        boolean z10 = this.isSpoiler;
        String str3 = this.spoilerDescription;
        boolean z11 = this.isObscure;
        boolean z12 = this.isObscureAwaitingScan;
        boolean z13 = this.obscureHideControls;
        boolean z14 = this.obscureIsOpaque;
        String str4 = this.obscureDescription;
        Boolean bool = this.verifyAge;
        String str5 = this.descriptionHint;
        String str6 = this.accessibilityRole;
        return "ThumbnailDisplayComponent(type=" + i10 + ", id=" + str + ", media=" + unfurledMediaItem + ", description=" + str2 + ", isSpoiler=" + z10 + ", spoilerDescription=" + str3 + ", isObscure=" + z11 + ", isObscureAwaitingScan=" + z12 + ", obscureHideControls=" + z13 + ", obscureIsOpaque=" + z14 + ", obscureDescription=" + str4 + ", verifyAge=" + bool + ", descriptionHint=" + str5 + ", accessibilityRole=" + str6 + ")";
    }

    public /* synthetic */ ThumbnailDisplayComponent(int i10, String str, UnfurledMediaItem unfurledMediaItem, String str2, boolean z10, String str3, boolean z11, boolean z12, boolean z13, boolean z14, String str4, Boolean bool, String str5, String str6, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, unfurledMediaItem, (i11 & 8) != 0 ? null : str2, z10, str3, z11, z12, z13, z14, str4, bool, str5, str6);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ThumbnailDisplayComponent(int i10, @NotNull String id2, @NotNull UnfurledMediaItem media, String str, boolean z10, String str2, boolean z11, boolean z12, boolean z13, boolean z14, String str3, Boolean bool, @NotNull String descriptionHint, @NotNull String accessibilityRole) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(media, "media");
        Intrinsics.checkNotNullParameter(descriptionHint, "descriptionHint");
        Intrinsics.checkNotNullParameter(accessibilityRole, "accessibilityRole");
        this.type = i10;
        this.f9287id = id2;
        this.media = media;
        this.description = str;
        this.isSpoiler = z10;
        this.spoilerDescription = str2;
        this.isObscure = z11;
        this.isObscureAwaitingScan = z12;
        this.obscureHideControls = z13;
        this.obscureIsOpaque = z14;
        this.obscureDescription = str3;
        this.verifyAge = bool;
        this.descriptionHint = descriptionHint;
        this.accessibilityRole = accessibilityRole;
        boolean z15 = true;
        this.spoilerOrNull = str2 == null || StringsKt.k0(str2) ? null : str2;
        if (str3 != null && !StringsKt.k0(str3)) {
            z15 = false;
        }
        this.obscureOrNull = z15 ? null : str3;
    }
}
