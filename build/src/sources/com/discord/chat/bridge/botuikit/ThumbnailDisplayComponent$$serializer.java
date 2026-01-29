package com.discord.chat.bridge.botuikit;

import androidx.recyclerview.widget.RecyclerView;
import at.a2;
import at.h0;
import at.n2;
import at.p0;
import com.discord.chat.bridge.media.UnfurledMediaItem;
import com.discord.chat.bridge.media.UnfurledMediaItem$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/ThumbnailDisplayComponent.$serializer", "Lat/h0;", "Lcom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/ThumbnailDisplayComponent;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ThumbnailDisplayComponent$$serializer implements h0 {
    @NotNull
    public static final ThumbnailDisplayComponent$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ThumbnailDisplayComponent$$serializer thumbnailDisplayComponent$$serializer = new ThumbnailDisplayComponent$$serializer();
        INSTANCE = thumbnailDisplayComponent$$serializer;
        a2 a2Var = new a2("11", thumbnailDisplayComponent$$serializer, 16);
        a2Var.o("type", false);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o("media", false);
        a2Var.o("description", true);
        a2Var.o("isSpoiler", false);
        a2Var.o("spoilerDescription", false);
        a2Var.o("isObscure", false);
        a2Var.o("isObscureAwaitingScan", false);
        a2Var.o("obscureHideControls", false);
        a2Var.o("obscureIsOpaque", false);
        a2Var.o("obscureDescription", false);
        a2Var.o("verifyAge", false);
        a2Var.o("descriptionHint", false);
        a2Var.o(ViewProps.ACCESSIBILITY_ROLE, false);
        a2Var.o("spoilerOrNull", true);
        a2Var.o("obscureOrNull", true);
        descriptor = a2Var;
    }

    private ThumbnailDisplayComponent$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f6848a;
        KSerializer u10 = ys.a.u(n2Var);
        at.h hVar = at.h.f6812a;
        return new KSerializer[]{p0.f6864a, n2Var, UnfurledMediaItem$$serializer.INSTANCE, u10, hVar, ys.a.u(n2Var), hVar, hVar, hVar, hVar, ys.a.u(n2Var), ys.a.u(hVar), n2Var, n2Var, ys.a.u(n2Var), ys.a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ThumbnailDisplayComponent deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        String str2;
        UnfurledMediaItem unfurledMediaItem;
        int i11;
        String str3;
        String str4;
        String str5;
        Boolean bool;
        String str6;
        String str7;
        String str8;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        int i12;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        int i13 = 11;
        int i14 = 10;
        int i15 = 8;
        if (b10.p()) {
            int i16 = b10.i(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            n2 n2Var = n2.f6848a;
            boolean C = b10.C(serialDescriptor, 4);
            boolean C2 = b10.C(serialDescriptor, 6);
            boolean C3 = b10.C(serialDescriptor, 7);
            boolean C4 = b10.C(serialDescriptor, 8);
            boolean C5 = b10.C(serialDescriptor, 9);
            Boolean bool2 = (Boolean) b10.n(serialDescriptor, 11, at.h.f6812a, null);
            String m11 = b10.m(serialDescriptor, 12);
            String m12 = b10.m(serialDescriptor, 13);
            String str9 = (String) b10.n(serialDescriptor, 14, n2Var, null);
            str3 = (String) b10.n(serialDescriptor, 15, n2Var, null);
            unfurledMediaItem = (UnfurledMediaItem) b10.y(serialDescriptor, 2, UnfurledMediaItem$$serializer.INSTANCE, null);
            str6 = m10;
            i11 = 65535;
            str7 = m11;
            str5 = (String) b10.n(serialDescriptor, 10, n2Var, null);
            z10 = C5;
            z11 = C3;
            z12 = C2;
            str = (String) b10.n(serialDescriptor, 5, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 3, n2Var, null);
            z13 = C4;
            z14 = C;
            str4 = str9;
            str8 = m12;
            bool = bool2;
            i10 = i16;
        } else {
            boolean z15 = true;
            int i17 = 0;
            boolean z16 = false;
            boolean z17 = false;
            boolean z18 = false;
            boolean z19 = false;
            boolean z20 = false;
            String str10 = null;
            String str11 = null;
            String str12 = null;
            String str13 = null;
            String str14 = null;
            Boolean bool3 = null;
            String str15 = null;
            String str16 = null;
            String str17 = null;
            int i18 = 0;
            UnfurledMediaItem unfurledMediaItem2 = null;
            while (z15) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z15 = false;
                        break;
                    case 0:
                        i18 |= 1;
                        i15 = i15;
                        i17 = b10.i(serialDescriptor, 0);
                        i13 = 11;
                        i14 = 10;
                        break;
                    case 1:
                        i12 = i15;
                        str15 = b10.m(serialDescriptor, 1);
                        i18 |= 2;
                        i15 = i12;
                        i13 = 11;
                        i14 = 10;
                        break;
                    case 2:
                        i12 = i15;
                        unfurledMediaItem2 = (UnfurledMediaItem) b10.y(serialDescriptor, 2, UnfurledMediaItem$$serializer.INSTANCE, unfurledMediaItem2);
                        i18 |= 4;
                        i15 = i12;
                        i13 = 11;
                        i14 = 10;
                        break;
                    case 3:
                        i12 = i15;
                        str11 = (String) b10.n(serialDescriptor, 3, n2.f6848a, str11);
                        i18 |= 8;
                        i15 = i12;
                        i13 = 11;
                        i14 = 10;
                        break;
                    case 4:
                        i12 = i15;
                        z20 = b10.C(serialDescriptor, 4);
                        i18 |= 16;
                        i15 = i12;
                        i13 = 11;
                        i14 = 10;
                        break;
                    case 5:
                        i12 = i15;
                        str10 = (String) b10.n(serialDescriptor, 5, n2.f6848a, str10);
                        i18 |= 32;
                        i15 = i12;
                        i13 = 11;
                        i14 = 10;
                        break;
                    case 6:
                        z18 = b10.C(serialDescriptor, 6);
                        i18 |= 64;
                        i15 = i15;
                        i13 = 11;
                        break;
                    case 7:
                        z17 = b10.C(serialDescriptor, 7);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        i15 = i15;
                        i13 = 11;
                        break;
                    case 8:
                        int i19 = i15;
                        z19 = b10.C(serialDescriptor, i19);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        i15 = i19;
                        break;
                    case 9:
                        z16 = b10.C(serialDescriptor, 9);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        i15 = 8;
                        break;
                    case 10:
                        str14 = (String) b10.n(serialDescriptor, i14, n2.f6848a, str14);
                        i18 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        i15 = 8;
                        break;
                    case 11:
                        bool3 = (Boolean) b10.n(serialDescriptor, i13, at.h.f6812a, bool3);
                        i18 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        i15 = 8;
                        break;
                    case 12:
                        str16 = b10.m(serialDescriptor, 12);
                        i18 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        i15 = 8;
                        break;
                    case 13:
                        str17 = b10.m(serialDescriptor, 13);
                        i18 |= 8192;
                        i15 = 8;
                        break;
                    case 14:
                        str13 = (String) b10.n(serialDescriptor, 14, n2.f6848a, str13);
                        i18 |= 16384;
                        i15 = 8;
                        break;
                    case 15:
                        str12 = (String) b10.n(serialDescriptor, 15, n2.f6848a, str12);
                        i18 |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                        i15 = 8;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i17;
            str = str10;
            str2 = str11;
            unfurledMediaItem = unfurledMediaItem2;
            i11 = i18;
            str3 = str12;
            str4 = str13;
            str5 = str14;
            bool = bool3;
            str6 = str15;
            str7 = str16;
            str8 = str17;
            z10 = z16;
            z11 = z17;
            z12 = z18;
            z13 = z19;
            z14 = z20;
        }
        b10.c(serialDescriptor);
        return new ThumbnailDisplayComponent(i11, i10, str6, unfurledMediaItem, str2, z14, str, z12, z11, z13, z10, str5, bool, str7, str8, str4, str3, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ThumbnailDisplayComponent value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ThumbnailDisplayComponent.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
