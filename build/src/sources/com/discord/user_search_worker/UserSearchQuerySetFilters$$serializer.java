package com.discord.user_search_worker;

import ft.b0;
import jt.a2;
import jt.h0;
import jt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/user_search_worker/UserSearchQuerySetFilters.$serializer", "Ljt/h0;", "Lcom/discord/user_search_worker/UserSearchQuerySetFilters;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/user_search_worker/UserSearchQuerySetFilters;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/user_search_worker/UserSearchQuerySetFilters;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@qr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class UserSearchQuerySetFilters$$serializer implements h0 {
    @NotNull
    public static final UserSearchQuerySetFilters$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        UserSearchQuerySetFilters$$serializer userSearchQuerySetFilters$$serializer = new UserSearchQuerySetFilters$$serializer();
        INSTANCE = userSearchQuerySetFilters$$serializer;
        a2 a2Var = new a2("com.discord.user_search_worker.UserSearchQuerySetFilters", userSearchQuerySetFilters$$serializer, 3);
        a2Var.o("guild", true);
        a2Var.o("friends", true);
        a2Var.o("strict", true);
        descriptor = a2Var;
    }

    private UserSearchQuerySetFilters$$serializer() {
    }

    @Override // jt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        KSerializer u10 = gt.a.u(n2.f31041a);
        jt.h hVar = jt.h.f31005a;
        return new KSerializer[]{u10, gt.a.u(hVar), gt.a.u(hVar)};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final UserSearchQuerySetFilters deserialize(@NotNull Decoder decoder) {
        int i10;
        String str;
        Boolean bool;
        Boolean bool2;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        String str2 = null;
        if (b10.p()) {
            jt.h hVar = jt.h.f31005a;
            str = (String) b10.n(serialDescriptor, 0, n2.f31041a, null);
            bool2 = (Boolean) b10.n(serialDescriptor, 2, hVar, null);
            bool = (Boolean) b10.n(serialDescriptor, 1, hVar, null);
            i10 = 7;
        } else {
            boolean z10 = true;
            int i11 = 0;
            Boolean bool3 = null;
            Boolean bool4 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    str2 = (String) b10.n(serialDescriptor, 0, n2.f31041a, str2);
                    i11 |= 1;
                } else if (o10 == 1) {
                    bool3 = (Boolean) b10.n(serialDescriptor, 1, jt.h.f31005a, bool3);
                    i11 |= 2;
                } else if (o10 != 2) {
                    throw new b0(o10);
                } else {
                    bool4 = (Boolean) b10.n(serialDescriptor, 2, jt.h.f31005a, bool4);
                    i11 |= 4;
                }
            }
            i10 = i11;
            str = str2;
            bool = bool3;
            bool2 = bool4;
        }
        b10.c(serialDescriptor);
        return new UserSearchQuerySetFilters(i10, str, bool, bool2, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // ft.o
    public final void serialize(@NotNull Encoder encoder, @NotNull UserSearchQuerySetFilters value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        UserSearchQuerySetFilters.write$Self$user_search_worker_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // jt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
