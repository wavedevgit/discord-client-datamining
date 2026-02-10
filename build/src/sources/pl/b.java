package pl;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends d {

    /* renamed from: e  reason: collision with root package name */
    private final a f44301e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f44302i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        DATA_SOURCE("data source error");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f44305d;

        a(String str) {
            this.f44305d = str;
        }
    }

    public b(a aVar, Uri uri, Throwable th2) {
        super(th2);
        this.f44301e = aVar;
        this.f44302i = uri;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return "Failed to create media source due to a " + this.f44301e.f44305d;
    }

    @Override // pl.d, java.lang.Throwable
    public String toString() {
        return super.toString() + "\nFailed to create media source due to a " + this.f44301e.f44305d + "\nUri: " + this.f44302i;
    }
}
