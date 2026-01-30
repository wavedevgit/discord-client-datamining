package jl;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends d {

    /* renamed from: e  reason: collision with root package name */
    private final a f32218e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f32219i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        DATA_SOURCE("data source error");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f32222d;

        a(String str) {
            this.f32222d = str;
        }
    }

    public b(a aVar, Uri uri, Throwable th2) {
        super(th2);
        this.f32218e = aVar;
        this.f32219i = uri;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return "Failed to create media source due to a " + this.f32218e.f32222d;
    }

    @Override // jl.d, java.lang.Throwable
    public String toString() {
        return super.toString() + "\nFailed to create media source due to a " + this.f32218e.f32222d + "\nUri: " + this.f32219i;
    }
}
