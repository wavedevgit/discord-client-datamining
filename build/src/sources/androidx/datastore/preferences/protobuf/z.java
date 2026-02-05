package androidx.datastore.preferences.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z extends IOException {

    /* renamed from: d  reason: collision with root package name */
    private o0 f3975d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends z {
        public a(String str) {
            super(str);
        }
    }

    public z(String str) {
        super(str);
        this.f3975d = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z a() {
        return new z("Protocol message end-group tag did not match expected tag.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z b() {
        return new z("Protocol message contained an invalid tag (zero).");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z c() {
        return new z("Protocol message had invalid UTF-8.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a d() {
        return new a("Protocol message tag had invalid wire type.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z e() {
        return new z("CodedInputStream encountered a malformed varint.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z f() {
        return new z("CodedInputStream encountered an embedded string or message which claimed to have negative size.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z g() {
        return new z("Failed to parse the message.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z h() {
        return new z("Protocol message had too many levels of nesting.  May be malicious.  Use CodedInputStream.setRecursionLimit() to increase the depth limit.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z j() {
        return new z("Protocol message was too large.  May be malicious.  Use CodedInputStream.setSizeLimit() to increase the size limit.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z k() {
        return new z("While parsing a protocol message, the input ended unexpectedly in the middle of a field.  This could mean either that the input has been truncated or that an embedded message misreported its own length.");
    }

    public z i(o0 o0Var) {
        this.f3975d = o0Var;
        return this;
    }
}
