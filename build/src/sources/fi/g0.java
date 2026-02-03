package fi;

import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g0 implements s {

    /* renamed from: a  reason: collision with root package name */
    private final FileChannel f24013a;

    /* renamed from: b  reason: collision with root package name */
    private final long f24014b;

    /* renamed from: c  reason: collision with root package name */
    private final long f24015c;

    public g0(FileChannel fileChannel, long j10, long j11) {
        this.f24013a = fileChannel;
        this.f24014b = j10;
        this.f24015c = j11;
    }

    @Override // fi.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        MappedByteBuffer map = this.f24013a.map(FileChannel.MapMode.READ_ONLY, this.f24014b + j10, i10);
        map.load();
        for (MessageDigest messageDigest : messageDigestArr) {
            map.position(0);
            messageDigest.update(map);
        }
    }

    @Override // fi.s
    public final long zza() {
        return this.f24015c;
    }
}
