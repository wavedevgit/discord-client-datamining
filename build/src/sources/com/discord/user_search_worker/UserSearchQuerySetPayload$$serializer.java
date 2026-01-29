package com.discord.user_search_worker;

import at.a2;
import at.h0;
import at.n2;
import at.p0;
import at.x;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/user_search_worker/UserSearchQuerySetPayload.$serializer", "Lat/h0;", "Lcom/discord/user_search_worker/UserSearchQuerySetPayload;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/user_search_worker/UserSearchQuerySetPayload;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/user_search_worker/UserSearchQuerySetPayload;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ir.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class UserSearchQuerySetPayload$$serializer implements h0 {
    @NotNull
    public static final UserSearchQuerySetPayload$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        UserSearchQuerySetPayload$$serializer userSearchQuerySetPayload$$serializer = new UserSearchQuerySetPayload$$serializer();
        INSTANCE = userSearchQuerySetPayload$$serializer;
        a2 a2Var = new a2("com.discord.user_search_worker.UserSearchQuerySetPayload", userSearchQuerySetPayload$$serializer, 7);
        a2Var.o("query", false);
        a2Var.o("filters", true);
        a2Var.o("blacklist", true);
        a2Var.o("whitelist", true);
        a2Var.o("boosters", false);
        a2Var.o("boosterFallback", false);
        a2Var.o("limit", false);
        descriptor = a2Var;
    }

    private UserSearchQuerySetPayload$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = UserSearchQuerySetPayload.$childSerializers;
        return new KSerializer[]{n2.f6848a, ys.a.u(UserSearchQuerySetFilters$$serializer.INSTANCE), ys.a.u((KSerializer) lazyArr[2].getValue()), ys.a.u((KSerializer) lazyArr[3].getValue()), lazyArr[4].getValue(), x.f6902a, p0.f6864a};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final UserSearchQuerySetPayload deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        int i10;
        Map map;
        List list;
        List list2;
        int i11;
        double d10;
        String str;
        UserSearchQuerySetFilters userSearchQuerySetFilters;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = UserSearchQuerySetPayload.$childSerializers;
        int i12 = 6;
        int i13 = 3;
        if (b10.p()) {
            String m10 = b10.m(serialDescriptor, 0);
            double F = b10.F(serialDescriptor, 5);
            map = (Map) b10.y(serialDescriptor, 4, (DeserializationStrategy) lazyArr[4].getValue(), null);
            str = m10;
            i10 = b10.i(serialDescriptor, 6);
            i11 = 127;
            list = (List) b10.n(serialDescriptor, 3, (DeserializationStrategy) lazyArr[3].getValue(), null);
            list2 = (List) b10.n(serialDescriptor, 2, (DeserializationStrategy) lazyArr[2].getValue(), null);
            userSearchQuerySetFilters = (UserSearchQuerySetFilters) b10.n(serialDescriptor, 1, UserSearchQuerySetFilters$$serializer.INSTANCE, null);
            d10 = F;
        } else {
            double d11 = 0.0d;
            int i14 = 2;
            boolean z10 = true;
            int i15 = 0;
            Map map2 = null;
            List list3 = null;
            String str2 = null;
            UserSearchQuerySetFilters userSearchQuerySetFilters2 = null;
            int i16 = 0;
            List list4 = null;
            while (z10) {
                int i17 = i13;
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z10 = false;
                        i13 = 3;
                        i14 = 2;
                        break;
                    case 0:
                        str2 = b10.m(serialDescriptor, 0);
                        i16 |= 1;
                        i12 = 6;
                        i13 = 3;
                        i14 = 2;
                        break;
                    case 1:
                        userSearchQuerySetFilters2 = (UserSearchQuerySetFilters) b10.n(serialDescriptor, 1, UserSearchQuerySetFilters$$serializer.INSTANCE, userSearchQuerySetFilters2);
                        i16 |= 2;
                        i12 = 6;
                        i13 = 3;
                        i14 = 2;
                        break;
                    case 2:
                        list4 = (List) b10.n(serialDescriptor, i14, (DeserializationStrategy) lazyArr[i14].getValue(), list4);
                        i16 |= 4;
                        i12 = 6;
                        i13 = 3;
                        break;
                    case 3:
                        list3 = (List) b10.n(serialDescriptor, i17, (DeserializationStrategy) lazyArr[i17].getValue(), list3);
                        i16 |= 8;
                        i13 = i17;
                        i12 = 6;
                        break;
                    case 4:
                        map2 = (Map) b10.y(serialDescriptor, 4, (DeserializationStrategy) lazyArr[4].getValue(), map2);
                        i16 |= 16;
                        i13 = i17;
                        break;
                    case 5:
                        d11 = b10.F(serialDescriptor, 5);
                        i16 |= 32;
                        i13 = i17;
                        break;
                    case 6:
                        i15 = b10.i(serialDescriptor, i12);
                        i16 |= 64;
                        i13 = i17;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            i10 = i15;
            map = map2;
            list = list3;
            list2 = list4;
            i11 = i16;
            d10 = d11;
            str = str2;
            userSearchQuerySetFilters = userSearchQuerySetFilters2;
        }
        b10.c(serialDescriptor);
        return new UserSearchQuerySetPayload(i11, str, userSearchQuerySetFilters, list2, list, map, d10, i10, (SerializationConstructorMarker) null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull UserSearchQuerySetPayload value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        UserSearchQuerySetPayload.write$Self$user_search_worker_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
