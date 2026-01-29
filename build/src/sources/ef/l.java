package ef;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends UnsupportedOperationException {

    /* renamed from: d  reason: collision with root package name */
    private final com.google.android.gms.common.d f22781d;

    public l(com.google.android.gms.common.d dVar) {
        this.f22781d = dVar;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return "Missing ".concat(String.valueOf(this.f22781d));
    }
}
