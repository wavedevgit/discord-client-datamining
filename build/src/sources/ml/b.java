package ml;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends d {

    /* renamed from: e  reason: collision with root package name */
    private final a f38714e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f38715i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        DATA_SOURCE("data source error");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f38718d;

        a(String str) {
            this.f38718d = str;
        }
    }

    public b(a aVar, Uri uri, Throwable th2) {
        super(th2);
        this.f38714e = aVar;
        this.f38715i = uri;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return "Failed to create media source due to a " + this.f38714e.f38718d;
    }

    @Override // ml.d, java.lang.Throwable
    public String toString() {
        return super.toString() + "\nFailed to create media source due to a " + this.f38714e.f38718d + "\nUri: " + this.f38715i;
    }
}
