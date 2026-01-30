package jl;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c extends d {

    /* renamed from: e  reason: collision with root package name */
    private final a f32223e;

    /* renamed from: i  reason: collision with root package name */
    private final String f32224i;

    /* renamed from: o  reason: collision with root package name */
    private final String f32225o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        INVALID_PARAMS("Invalid parameters"),
        IO_FAILUE("Failed to open the media target for write."),
        UNSUPPORTED_URI_TYPE("URI type not supported at API level below 26"),
        NO_OUTPUT_TRACKS("No output tracks");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f32231d;

        a(String str) {
            this.f32231d = str;
        }
    }

    public c(a aVar, Uri uri, int i10, Throwable th2) {
        this(aVar, uri.toString(), i10, th2);
    }

    @Override // jl.d, java.lang.Throwable
    public String toString() {
        return super.toString() + '\n' + this.f32223e.f32231d + "\nOutput file path or Uri encoded string: " + this.f32224i + "\nMediaMuxer output format: " + this.f32225o;
    }

    public c(a aVar, String str, int i10, Throwable th2) {
        this(aVar, str, String.valueOf(i10), th2);
    }

    public c(a aVar, String str, String str2, Throwable th2) {
        super(th2);
        this.f32223e = aVar;
        this.f32224i = str;
        this.f32225o = str2;
    }
}
