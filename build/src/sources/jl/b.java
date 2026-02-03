package jl;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends d {

    /* renamed from: e  reason: collision with root package name */
    private final a f31752e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f31753i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        DATA_SOURCE("data source error");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f31756d;

        a(String str) {
            this.f31756d = str;
        }
    }

    public b(a aVar, Uri uri, Throwable th2) {
        super(th2);
        this.f31752e = aVar;
        this.f31753i = uri;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return "Failed to create media source due to a " + this.f31752e.f31756d;
    }

    @Override // jl.d, java.lang.Throwable
    public String toString() {
        return super.toString() + "\nFailed to create media source due to a " + this.f31752e.f31756d + "\nUri: " + this.f31753i;
    }
}
