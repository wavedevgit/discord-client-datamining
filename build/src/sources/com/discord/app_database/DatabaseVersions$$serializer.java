package com.discord.app_database;

import at.b0;
import dt.a2;
import dt.h0;
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
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/app_database/DatabaseVersions.$serializer", "Ldt/h0;", "Lcom/discord/app_database/DatabaseVersions;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/app_database/DatabaseVersions;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/app_database/DatabaseVersions;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "app_database_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@lr.c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class DatabaseVersions$$serializer implements h0 {
    @NotNull
    public static final DatabaseVersions$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        DatabaseVersions$$serializer databaseVersions$$serializer = new DatabaseVersions$$serializer();
        INSTANCE = databaseVersions$$serializer;
        a2 a2Var = new a2("com.discord.app_database.DatabaseVersions", databaseVersions$$serializer, 2);
        a2Var.o("guildVersions", false);
        a2Var.o("nonGuildVersions", false);
        descriptor = a2Var;
    }

    private DatabaseVersions$$serializer() {
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // dt.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        Lazy[] lazyArr;
        lazyArr = DatabaseVersions.$childSerializers;
        return new KSerializer[]{lazyArr[0].getValue(), lazyArr[1].getValue()};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final DatabaseVersions deserialize(@NotNull Decoder decoder) {
        Lazy[] lazyArr;
        NonGuildVersion[] nonGuildVersionArr;
        GuildVersion[] guildVersionArr;
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        lazyArr = DatabaseVersions.$childSerializers;
        if (b10.p()) {
            guildVersionArr = (GuildVersion[]) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), null);
            nonGuildVersionArr = (NonGuildVersion[]) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), null);
            i10 = 3;
        } else {
            boolean z10 = true;
            int i11 = 0;
            NonGuildVersion[] nonGuildVersionArr2 = null;
            GuildVersion[] guildVersionArr2 = null;
            while (z10) {
                int o10 = b10.o(serialDescriptor);
                if (o10 == -1) {
                    z10 = false;
                } else if (o10 == 0) {
                    guildVersionArr2 = (GuildVersion[]) b10.y(serialDescriptor, 0, (DeserializationStrategy) lazyArr[0].getValue(), guildVersionArr2);
                    i11 |= 1;
                } else if (o10 != 1) {
                    throw new b0(o10);
                } else {
                    nonGuildVersionArr2 = (NonGuildVersion[]) b10.y(serialDescriptor, 1, (DeserializationStrategy) lazyArr[1].getValue(), nonGuildVersionArr2);
                    i11 |= 2;
                }
            }
            nonGuildVersionArr = nonGuildVersionArr2;
            guildVersionArr = guildVersionArr2;
            i10 = i11;
        }
        b10.c(serialDescriptor);
        return new DatabaseVersions(i10, guildVersionArr, nonGuildVersionArr, null);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // at.o
    public final void serialize(@NotNull Encoder encoder, @NotNull DatabaseVersions value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        DatabaseVersions.write$Self$app_database_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // dt.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
