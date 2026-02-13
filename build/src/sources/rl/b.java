package rl;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends d {

    /* renamed from: e  reason: collision with root package name */
    private final a f47998e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f47999i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        DATA_SOURCE("data source error");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f48002d;

        a(String str) {
            this.f48002d = str;
        }
    }

    public b(a aVar, Uri uri, Throwable th2) {
        super(th2);
        this.f47998e = aVar;
        this.f47999i = uri;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return "Failed to create media source due to a " + this.f47998e.f48002d;
    }

    @Override // rl.d, java.lang.Throwable
    public String toString() {
        return super.toString() + "\nFailed to create media source due to a " + this.f47998e.f48002d + "\nUri: " + this.f47999i;
    }
}
