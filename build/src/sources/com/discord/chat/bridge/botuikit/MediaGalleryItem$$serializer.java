package com.discord.chat.bridge.botuikit;

import androidx.recyclerview.widget.RecyclerView;
import at.b0;
import com.discord.chat.bridge.botuikit.MediaGalleryItemType;
import com.discord.chat.bridge.media.UnfurledMediaItem;
import com.discord.chat.bridge.media.UnfurledMediaItem$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import dt.a2;
import dt.h0;
import dt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/botuikit/MediaGalleryItem.$serializer", "Ldt/h0;", "Lcom/discord/chat/bridge/botuikit/MediaGalleryItem;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/botuikit/MediaGalleryItem;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/botuikit/MediaGalleryItem;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MediaGalleryItem$$serializer implements h0 {
    @NotNull
    public static final MediaGalleryItem$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        MediaGalleryItem$$serializer mediaGalleryItem$$serializer = new MediaGalleryItem$$serializer();
        INSTANCE = mediaGalleryItem$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.botuikit.MediaGalleryItem", mediaGalleryItem$$serializer, 18);
        a2Var.o("media", false);
        a2Var.o("mediaType", false);
        a2Var.o("videoPreviewUrl", true);
        a2Var.o("isSpoiler", false);
        a2Var.o("spoilerDescription", false);
        a2Var.o("isObscure", false);
        a2Var.o("isObscureAwaitingScan", false);
        a2Var.o("obscureDescription", false);
        a2Var.o("obscureHideControls", false);
        a2Var.o("obscureIsOpaque", false);
        a2Var.o("verifyAge", false);
        a2Var.o("showDescription", false);
        a2Var.o("description", true);
        a2Var.o("descriptionHint", false);
        a2Var.o(ViewProps.ACCESSIBILITY_ROLE, false);
        a2Var.o("portalId", false);
        a2Var.o("spoilerOrNull", true);
        a2Var.o("obscureOrNull", true);
        descriptor = a2Var;
    }

    private MediaGalleryItem$$serializer() {
    }

    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f20978a;
        KSerializer u10 = bt.a.u(n2Var);
        dt.h hVar = dt.h.f20942a;
        return new KSerializer[]{UnfurledMediaItem$$serializer.INSTANCE, MediaGalleryItemType.Serializer.INSTANCE, u10, hVar, bt.a.u(n2Var), hVar, hVar, bt.a.u(n2Var), hVar, hVar, bt.a.u(hVar), hVar, bt.a.u(n2Var), n2Var, n2Var, bt.a.u(n2Var), bt.a.u(n2Var), bt.a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final MediaGalleryItem deserialize(@NotNull Decoder decoder) {
        String str;
        String str2;
        String str3;
        boolean z10;
        MediaGalleryItemType mediaGalleryItemType;
        int i10;
        UnfurledMediaItem unfurledMediaItem;
        String str4;
        String str5;
        String str6;
        String str7;
        Boolean bool;
        String str8;
        String str9;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        boolean z15;
        int i11;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        char c10 = '\n';
        if (b10.p()) {
            UnfurledMediaItem unfurledMediaItem2 = (UnfurledMediaItem) b10.y(serialDescriptor, 0, UnfurledMediaItem$$serializer.INSTANCE, null);
            n2 n2Var = n2.f20978a;
            boolean C = b10.C(serialDescriptor, 3);
            boolean C2 = b10.C(serialDescriptor, 5);
            boolean C3 = b10.C(serialDescriptor, 6);
            boolean C4 = b10.C(serialDescriptor, 8);
            boolean C5 = b10.C(serialDescriptor, 9);
            boolean C6 = b10.C(serialDescriptor, 11);
            String str10 = (String) b10.n(serialDescriptor, 12, n2Var, null);
            String m10 = b10.m(serialDescriptor, 13);
            String m11 = b10.m(serialDescriptor, 14);
            String str11 = (String) b10.n(serialDescriptor, 15, n2Var, null);
            String str12 = (String) b10.n(serialDescriptor, 16, n2Var, null);
            str2 = (String) b10.n(serialDescriptor, 17, n2Var, null);
            z10 = C4;
            str = (String) b10.n(serialDescriptor, 2, n2Var, null);
            i10 = 262143;
            str8 = m10;
            bool = (Boolean) b10.n(serialDescriptor, 10, dt.h.f20942a, null);
            z11 = C6;
            z12 = C5;
            str7 = (String) b10.n(serialDescriptor, 7, n2Var, null);
            z13 = C3;
            z14 = C2;
            z15 = C;
            str3 = (String) b10.n(serialDescriptor, 4, n2Var, null);
            str4 = str12;
            mediaGalleryItemType = (MediaGalleryItemType) b10.y(serialDescriptor, 1, MediaGalleryItemType.Serializer.INSTANCE, null);
            str9 = m11;
            str6 = str10;
            str5 = str11;
            unfurledMediaItem = unfurledMediaItem2;
        } else {
            boolean z16 = true;
            String str13 = null;
            String str14 = null;
            String str15 = null;
            UnfurledMediaItem unfurledMediaItem3 = null;
            String str16 = null;
            String str17 = null;
            String str18 = null;
            String str19 = null;
            Boolean bool2 = null;
            String str20 = null;
            String str21 = null;
            int i12 = 0;
            boolean z17 = false;
            boolean z18 = false;
            boolean z19 = false;
            boolean z20 = false;
            boolean z21 = false;
            MediaGalleryItemType mediaGalleryItemType2 = null;
            boolean z22 = false;
            while (z16) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z16 = false;
                        break;
                    case 0:
                        unfurledMediaItem3 = (UnfurledMediaItem) b10.y(serialDescriptor, 0, UnfurledMediaItem$$serializer.INSTANCE, unfurledMediaItem3);
                        i12 |= 1;
                        c10 = '\n';
                        break;
                    case 1:
                        mediaGalleryItemType2 = (MediaGalleryItemType) b10.y(serialDescriptor, 1, MediaGalleryItemType.Serializer.INSTANCE, mediaGalleryItemType2);
                        i12 |= 2;
                        c10 = '\n';
                        break;
                    case 2:
                        str13 = (String) b10.n(serialDescriptor, 2, n2.f20978a, str13);
                        i12 |= 4;
                        c10 = '\n';
                        break;
                    case 3:
                        z21 = b10.C(serialDescriptor, 3);
                        i12 |= 8;
                        c10 = '\n';
                        break;
                    case 4:
                        str15 = (String) b10.n(serialDescriptor, 4, n2.f20978a, str15);
                        i12 |= 16;
                        c10 = '\n';
                        break;
                    case 5:
                        z20 = b10.C(serialDescriptor, 5);
                        i12 |= 32;
                        c10 = '\n';
                        break;
                    case 6:
                        z19 = b10.C(serialDescriptor, 6);
                        i12 |= 64;
                        c10 = '\n';
                        break;
                    case 7:
                        str19 = (String) b10.n(serialDescriptor, 7, n2.f20978a, str19);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        c10 = '\n';
                        break;
                    case 8:
                        boolean C7 = b10.C(serialDescriptor, 8);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        c10 = c10;
                        z22 = C7;
                        continue;
                    case 9:
                        z18 = b10.C(serialDescriptor, 9);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        c10 = c10;
                        continue;
                    case 10:
                        bool2 = (Boolean) b10.n(serialDescriptor, 10, dt.h.f20942a, bool2);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        c10 = '\n';
                        break;
                    case 11:
                        z17 = b10.C(serialDescriptor, 11);
                        i12 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                        c10 = '\n';
                        break;
                    case 12:
                        str18 = (String) b10.n(serialDescriptor, 12, n2.f20978a, str18);
                        i12 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        c10 = '\n';
                        break;
                    case 13:
                        str20 = b10.m(serialDescriptor, 13);
                        i12 |= 8192;
                        c10 = '\n';
                        break;
                    case 14:
                        str21 = b10.m(serialDescriptor, 14);
                        i12 |= 16384;
                        c10 = '\n';
                        break;
                    case 15:
                        str17 = (String) b10.n(serialDescriptor, 15, n2.f20978a, str17);
                        i11 = PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                        i12 |= i11;
                        c10 = '\n';
                        break;
                    case 16:
                        str16 = (String) b10.n(serialDescriptor, 16, n2.f20978a, str16);
                        i11 = 65536;
                        i12 |= i11;
                        c10 = '\n';
                        break;
                    case 17:
                        str14 = (String) b10.n(serialDescriptor, 17, n2.f20978a, str14);
                        i11 = 131072;
                        i12 |= i11;
                        c10 = '\n';
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            str = str13;
            str2 = str14;
            str3 = str15;
            z10 = z22;
            mediaGalleryItemType = mediaGalleryItemType2;
            i10 = i12;
            unfurledMediaItem = unfurledMediaItem3;
            str4 = str16;
            str5 = str17;
            str6 = str18;
            str7 = str19;
            bool = bool2;
            str8 = str20;
            str9 = str21;
            z11 = z17;
            z12 = z18;
            z13 = z19;
            z14 = z20;
            z15 = z21;
        }
        b10.c(serialDescriptor);
        return new MediaGalleryItem(i10, unfurledMediaItem, mediaGalleryItemType, str, z15, str3, z14, z13, str7, z10, z12, bool, z11, str6, str8, str9, str5, str4, str2, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull MediaGalleryItem value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        MediaGalleryItem.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
