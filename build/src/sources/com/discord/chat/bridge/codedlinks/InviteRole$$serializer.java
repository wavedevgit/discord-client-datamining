package com.discord.chat.bridge.codedlinks;

import bt.a2;
import bt.h0;
import bt.n2;
import bt.p0;
import com.discord.chat.bridge.roleicons.RoleIcon;
import com.discord.chat.bridge.roleicons.RoleIcon$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.b0;
@jr.c
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/chat/bridge/codedlinks/InviteRole.$serializer", "Lbt/h0;", "Lcom/discord/chat/bridge/codedlinks/InviteRole;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/chat/bridge/codedlinks/InviteRole;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/chat/bridge/codedlinks/InviteRole;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class InviteRole$$serializer implements h0 {
    @NotNull
    public static final InviteRole$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        InviteRole$$serializer inviteRole$$serializer = new InviteRole$$serializer();
        INSTANCE = inviteRole$$serializer;
        a2 a2Var = new a2("com.discord.chat.bridge.codedlinks.InviteRole", inviteRole$$serializer, 4);
        a2Var.o(StackTraceHelper.ID_KEY, false);
        a2Var.o(StackTraceHelper.NAME_KEY, false);
        a2Var.o(ViewProps.COLOR, false);
        a2Var.o("roleIcon", true);
        descriptor = a2Var;
    }

    private InviteRole$$serializer() {
    }

    @Override // bt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = zs.a.u(RoleIcon$$serializer.INSTANCE);
        n2 n2Var = n2.f7662a;
        return new KSerializer[]{n2Var, n2Var, p0.f7678a, u10};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final InviteRole deserialize(@NotNull Decoder decoder) {
        int i10;
        int i11;
        String str;
        String str2;
        RoleIcon roleIcon;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            String m11 = b10.m(serialDescriptor, 1);
            int i12 = b10.i(serialDescriptor, 2);
            str = m10;
            roleIcon = (RoleIcon) b10.n(serialDescriptor, 3, RoleIcon$$serializer.INSTANCE, null);
            i10 = i12;
            str2 = m11;
            i11 = 15;
        } else {
            boolean z10 = true;
            int i13 = 0;
            String str3 = null;
            String str4 = null;
            RoleIcon roleIcon2 = null;
            int i14 = 0;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str3 = b10.m(serialDescriptor, 0);
                    i14 |= 1;
                } else if (o10 == 1) {
                    str4 = b10.m(serialDescriptor, 1);
                    i14 |= 2;
                } else if (o10 == 2) {
                    i13 = b10.i(serialDescriptor, 2);
                    i14 |= 4;
                } else if (o10 != 3) {
                    throw new b0(o10);
                } else {
                    roleIcon2 = (RoleIcon) b10.n(serialDescriptor, 3, RoleIcon$$serializer.INSTANCE, roleIcon2);
                    i14 |= 8;
                }
            }
            i10 = i13;
            i11 = i14;
            str = str3;
            str2 = str4;
            roleIcon = roleIcon2;
        }
        b10.c(serialDescriptor);
        return new InviteRole(i11, str, str2, i10, roleIcon, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull InviteRole value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        InviteRole.write$Self$chat_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // bt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
