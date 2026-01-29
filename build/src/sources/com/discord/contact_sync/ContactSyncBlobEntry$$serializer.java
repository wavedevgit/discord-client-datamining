package com.discord.contact_sync;

import at.a2;
import at.h;
import at.h0;
import at.n2;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000:\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u001d\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u000f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0014\u001a\u00020\u00138\u0006¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"com/discord/contact_sync/ContactSyncBlobEntry.$serializer", "Lat/h0;", "Lcom/discord/contact_sync/ContactSyncBlobEntry;", "<init>", "()V", "Lkotlinx/serialization/encoding/Encoder;", "encoder", "value", "", "serialize", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/contact_sync/ContactSyncBlobEntry;)V", "Lkotlinx/serialization/encoding/Decoder;", "decoder", "deserialize", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/contact_sync/ContactSyncBlobEntry;", "", "Lkotlinx/serialization/KSerializer;", "childSerializers", "()[Lkotlinx/serialization/KSerializer;", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "contact_sync_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@c
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ContactSyncBlobEntry$$serializer implements h0 {
    @NotNull
    public static final ContactSyncBlobEntry$$serializer INSTANCE;
    @NotNull
    private static final SerialDescriptor descriptor;

    static {
        ContactSyncBlobEntry$$serializer contactSyncBlobEntry$$serializer = new ContactSyncBlobEntry$$serializer();
        INSTANCE = contactSyncBlobEntry$$serializer;
        a2 a2Var = new a2("com.discord.contact_sync.ContactSyncBlobEntry", contactSyncBlobEntry$$serializer, 6);
        a2Var.o("phone", false);
        a2Var.o("unencryptedName", false);
        a2Var.o("hasImageData", false);
        a2Var.o("deviceContactId", false);
        a2Var.o("givenName", false);
        a2Var.o("familyName", false);
        descriptor = a2Var;
    }

    private ContactSyncBlobEntry$$serializer() {
    }

    @Override // at.h0
    @NotNull
    public final KSerializer[] childSerializers() {
        n2 n2Var = n2.f6848a;
        return new KSerializer[]{n2Var, n2Var, h.f6812a, n2Var, n2Var, n2Var};
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final ContactSyncBlobEntry deserialize(@NotNull Decoder decoder) {
        String str;
        String str2;
        String str3;
        String str4;
        boolean z10;
        String str5;
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor serialDescriptor = descriptor;
        kotlinx.serialization.encoding.c b10 = decoder.b(serialDescriptor);
        if (b10.p()) {
            str = b10.m(serialDescriptor, 0);
            String m10 = b10.m(serialDescriptor, 1);
            boolean C = b10.C(serialDescriptor, 2);
            String m11 = b10.m(serialDescriptor, 3);
            String m12 = b10.m(serialDescriptor, 4);
            str2 = b10.m(serialDescriptor, 5);
            str3 = m11;
            str4 = m12;
            z10 = C;
            str5 = m10;
            i10 = 63;
        } else {
            str = null;
            String str6 = null;
            String str7 = null;
            String str8 = null;
            String str9 = null;
            boolean z11 = true;
            boolean z12 = false;
            int i11 = 0;
            while (z11) {
                int o10 = b10.o(serialDescriptor);
                switch (o10) {
                    case -1:
                        z11 = false;
                        continue;
                    case 0:
                        str = b10.m(serialDescriptor, 0);
                        i11 |= 1;
                        continue;
                    case 1:
                        str9 = b10.m(serialDescriptor, 1);
                        i11 |= 2;
                        break;
                    case 2:
                        z12 = b10.C(serialDescriptor, 2);
                        i11 |= 4;
                        break;
                    case 3:
                        str7 = b10.m(serialDescriptor, 3);
                        i11 |= 8;
                        break;
                    case 4:
                        str8 = b10.m(serialDescriptor, 4);
                        i11 |= 16;
                        break;
                    case 5:
                        str6 = b10.m(serialDescriptor, 5);
                        i11 |= 32;
                        break;
                    default:
                        throw new b0(o10);
                }
            }
            str2 = str6;
            str3 = str7;
            str4 = str8;
            z10 = z12;
            str5 = str9;
            i10 = i11;
        }
        String str10 = str;
        b10.c(serialDescriptor);
        return new ContactSyncBlobEntry(i10, str10, str5, z10, str3, str4, str2, null);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final SerialDescriptor getDescriptor() {
        return descriptor;
    }

    @Override // xs.o
    public final void serialize(@NotNull Encoder encoder, @NotNull ContactSyncBlobEntry value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor serialDescriptor = descriptor;
        CompositeEncoder b10 = encoder.b(serialDescriptor);
        ContactSyncBlobEntry.write$Self$contact_sync_release(value, b10, serialDescriptor);
        b10.c(serialDescriptor);
    }

    @Override // at.h0
    @NotNull
    public KSerializer[] typeParametersSerializers() {
        return h0.a.a(this);
    }
}
