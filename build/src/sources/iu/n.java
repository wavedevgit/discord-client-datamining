package iu;

import java.security.MessageDigest;
import javax.crypto.Mac;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends j implements Sink {

    /* renamed from: o  reason: collision with root package name */
    public static final a f31282o = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private final MessageDigest f31283e;

    /* renamed from: i  reason: collision with root package name */
    private final Mac f31284i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final n a(Sink sink) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            return new n(sink, "MD5");
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(Sink sink, MessageDigest digest) {
        super(sink);
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(digest, "digest");
        this.f31283e = digest;
        this.f31284i = null;
    }

    public final ByteString a() {
        byte[] doFinal;
        MessageDigest messageDigest = this.f31283e;
        if (messageDigest != null) {
            doFinal = messageDigest.digest();
        } else {
            Mac mac = this.f31284i;
            Intrinsics.checkNotNull(mac);
            doFinal = mac.doFinal();
        }
        Intrinsics.checkNotNull(doFinal);
        return new ByteString(doFinal);
    }

    @Override // iu.j, okio.Sink
    public void t0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        g0 g0Var = source.f44352d;
        Intrinsics.checkNotNull(g0Var);
        long j11 = 0;
        while (j11 < j10) {
            int min = (int) Math.min(j10 - j11, g0Var.f31251c - g0Var.f31250b);
            MessageDigest messageDigest = this.f31283e;
            if (messageDigest != null) {
                messageDigest.update(g0Var.f31249a, g0Var.f31250b, min);
            } else {
                Mac mac = this.f31284i;
                Intrinsics.checkNotNull(mac);
                mac.update(g0Var.f31249a, g0Var.f31250b, min);
            }
            j11 += min;
            g0Var = g0Var.f31254f;
            Intrinsics.checkNotNull(g0Var);
        }
        super.t0(source, j10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public n(okio.Sink r2, java.lang.String r3) {
        /*
            r1 = this;
            java.lang.String r0 = "sink"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = "algorithm"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            java.security.MessageDigest r3 = java.security.MessageDigest.getInstance(r3)
            java.lang.String r0 = "getInstance(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: iu.n.<init>(okio.Sink, java.lang.String):void");
    }
}
