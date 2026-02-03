package com.discord.chat.bridge.contentnode;

import bt.a2;
import bt.h0;
import bt.n2;
import bt.p0;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColors$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import ys.b0;
@jr.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/contentnode/LinkContentNode.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/contentnode/LinkContentNode;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class LinkContentNode$$serializer implements h0 {
    @NotNull
    public static final LinkContentNode$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        LinkContentNode$$serializer linkContentNode$$serializer = new LinkContentNode$$serializer();
        INSTANCE = linkContentNode$$serializer;
        a2 a2Var = new a2("link", linkContentNode$$serializer, 8);
        a2Var.o("content", false);
        a2Var.o("target", false);
        a2Var.o("linkColor", true);
        a2Var.o("roleColors", true);
        a2Var.o("shouldShowRoleDot", true);
        a2Var.o("url", true);
        a2Var.o("isUrl", true);
        a2Var.o("textContent", true);
        descriptor = a2Var;
    }

    private LinkContentNode$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = LinkContentNode.$childSerializers;
        bt.h hVar = bt.h.f7626a;
        n2 n2Var = n2.f7662a;
        return new KSerializer[]{lazyArr[0].getValue(), zs.a.u(LinkContextDataSerializer.INSTANCE), zs.a.u(p0.f7678a), zs.a.u(RoleColors$$serializer.INSTANCE), zs.a.u(hVar), zs.a.u(n2Var), hVar, zs.a.u(n2Var)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final LinkContentNode deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        boolean z10;
        String str;
        String str2;
        Boolean bool;
        RoleColors roleColors;
        int i10;
        List list;
        LinkContextData linkContextData;
        Integer num;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = LinkContentNode.$childSerializers;
        int i11 = 7;
        if (b10.p()) {
            n2 n2Var = n2.f7662a;
            boolean C = b10.C(serialDescriptor, 6);
            list = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), null);
            linkContextData = (LinkContextData) b10.n(serialDescriptor, 1, LinkContextDataSerializer.INSTANCE, null);
            str = (String) b10.n(serialDescriptor, 7, n2Var, null);
            z10 = C;
            str2 = (String) b10.n(serialDescriptor, 5, n2Var, null);
            roleColors = (RoleColors) b10.n(serialDescriptor, 3, RoleColors$$serializer.INSTANCE, null);
            bool = (Boolean) b10.n(serialDescriptor, 4, bt.h.f7626a, null);
            num = (Integer) b10.n(serialDescriptor, 2, p0.f7678a, null);
            i10 = 255;
        } else {
            boolean z11 = true;
            boolean z12 = false;
            String str3 = null;
            String str4 = null;
            Boolean bool2 = null;
            List list2 = null;
            LinkContextData linkContextData2 = null;
            Integer num2 = null;
            int i12 = 0;
            RoleColors roleColors2 = null;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        i11 = 7;
                        break;
                    case 0:
                        list2 = (List) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), list2);
                        i12 |= 1;
                        i11 = 7;
                        break;
                    case 1:
                        linkContextData2 = (LinkContextData) b10.n(serialDescriptor, 1, LinkContextDataSerializer.INSTANCE, linkContextData2);
                        i12 |= 2;
                        i11 = 7;
                        break;
                    case 2:
                        num2 = (Integer) b10.n(serialDescriptor, 2, p0.f7678a, num2);
                        i12 |= 4;
                        i11 = 7;
                        break;
                    case 3:
                        roleColors2 = (RoleColors) b10.n(serialDescriptor, 3, RoleColors$$serializer.INSTANCE, roleColors2);
                        i12 |= 8;
                        i11 = 7;
                        break;
                    case 4:
                        bool2 = (Boolean) b10.n(serialDescriptor, 4, bt.h.f7626a, bool2);
                        i12 |= 16;
                        i11 = 7;
                        continue;
                    case 5:
                        str4 = (String) b10.n(serialDescriptor, 5, n2.f7662a, str4);
                        i12 |= 32;
                        break;
                    case 6:
                        z12 = b10.C(serialDescriptor, 6);
                        i12 |= 64;
                        break;
                    case 7:
                        str3 = (String) b10.n(serialDescriptor, i11, n2.f7662a, str3);
                        i12 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            z10 = z12;
            str = str3;
            str2 = str4;
            bool = bool2;
            roleColors = roleColors2;
            i10 = i12;
            list = list2;
            linkContextData = linkContextData2;
            num = num2;
        }
        b10.c(serialDescriptor);
        return new LinkContentNode(i10, list, linkContextData, num, roleColors, bool, str2, z10, str, null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull LinkContentNode value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        LinkContentNode.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
