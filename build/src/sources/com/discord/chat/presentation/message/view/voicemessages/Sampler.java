package com.discord.chat.presentation.message.view.voicemessages;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0012\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b¨\u0006\t"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/Sampler;", "", "<init>", "()V", "downSample", "", "data", "targetSize", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Sampler {
    @NotNull
    public static final Sampler INSTANCE = new Sampler();

    private Sampler() {
    }

    @NotNull
    public final byte[] downSample(@NotNull byte[] data, int i10) {
        Intrinsics.checkNotNullParameter(data, "data");
        if (i10 == 0) {
            return new byte[0];
        }
        if (data.length == i10) {
            return data;
        }
        if (data.length == 0) {
            return new byte[i10];
        }
        if (data.length < i10) {
            return kotlin.collections.i.A(data, new byte[i10 - data.length]);
        }
        float length = data.length / i10;
        byte[] bArr = new byte[i10];
        int i11 = 0;
        int i12 = 0;
        while (i11 < i10) {
            int i13 = i11 + 1;
            int rint = (int) Math.rint(i13 * length);
            int min = Math.min(rint, data.length);
            int i14 = 0;
            int i15 = 0;
            while (i12 < min) {
                i14 += SamplerKt.getAbs(data[i12]);
                i15++;
                i12++;
            }
            bArr[i11] = (byte) (i14 / i15);
            i11 = i13;
            i12 = rint;
        }
        return bArr;
    }
}
