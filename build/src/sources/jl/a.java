package jl;

import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends d {

    /* renamed from: e  reason: collision with root package name */
    private final long f32216e;

    /* renamed from: i  reason: collision with root package name */
    private final long f32217i;

    public a(long j10, long j11) {
        this(j10, j11, new Throwable());
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return String.format(Locale.ENGLISH, "Insufficient disk space, estimated file size in bytes %d, available disk space in bytes %d", Long.valueOf(this.f32216e), Long.valueOf(this.f32217i));
    }

    public a(long j10, long j11, Throwable th2) {
        super(th2);
        this.f32216e = j10;
        this.f32217i = j11;
    }
}
