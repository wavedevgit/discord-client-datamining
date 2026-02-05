package ml;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c extends d {

    /* renamed from: e  reason: collision with root package name */
    private final a f38719e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38720i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38721o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        INVALID_PARAMS("Invalid parameters"),
        IO_FAILUE("Failed to open the media target for write."),
        UNSUPPORTED_URI_TYPE("URI type not supported at API level below 26"),
        NO_OUTPUT_TRACKS("No output tracks");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f38727d;

        a(String str) {
            this.f38727d = str;
        }
    }

    public c(a aVar, Uri uri, int i10, Throwable th2) {
        this(aVar, uri.toString(), i10, th2);
    }

    @Override // ml.d, java.lang.Throwable
    public String toString() {
        return super.toString() + '\n' + this.f38719e.f38727d + "\nOutput file path or Uri encoded string: " + this.f38720i + "\nMediaMuxer output format: " + this.f38721o;
    }

    public c(a aVar, String str, int i10, Throwable th2) {
        this(aVar, str, String.valueOf(i10), th2);
    }

    public c(a aVar, String str, String str2, Throwable th2) {
        super(th2);
        this.f38719e = aVar;
        this.f38720i = str;
        this.f38721o = str2;
    }
}
