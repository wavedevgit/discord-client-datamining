package gk;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class v extends IOException {

    /* renamed from: d  reason: collision with root package name */
    private i0 f25420d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25421e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends v {
        public a(String str) {
            super(str);
        }
    }

    public v(String str) {
        super(str);
        this.f25420d = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v b() {
        return new v("Protocol message end-group tag did not match expected tag.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v c() {
        return new v("Protocol message contained an invalid tag (zero).");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v d() {
        return new v("Protocol message had invalid UTF-8.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a e() {
        return new a("Protocol message tag had invalid wire type.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v f() {
        return new v("CodedInputStream encountered a malformed varint.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v g() {
        return new v("CodedInputStream encountered an embedded string or message which claimed to have negative size.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v h() {
        return new v("Failed to parse the message.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v i() {
        return new v("Protocol message had too many levels of nesting.  May be malicious.  Use CodedInputStream.setRecursionLimit() to increase the depth limit.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v l() {
        return new v("Protocol message was too large.  May be malicious.  Use CodedInputStream.setSizeLimit() to increase the size limit.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v m() {
        return new v("While parsing a protocol message, the input ended unexpectedly in the middle of a field.  This could mean either that the input has been truncated or that an embedded message misreported its own length.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        return this.f25421e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f25421e = true;
    }

    public v k(i0 i0Var) {
        this.f25420d = i0Var;
        return this;
    }

    public v(IOException iOException) {
        super(iOException.getMessage(), iOException);
        this.f25420d = null;
    }
}
