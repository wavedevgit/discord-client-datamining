package com.google.android.gms.internal.play_billing;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a2 extends IOException {

    /* renamed from: d  reason: collision with root package name */
    private v2 f13778d;

    public a2(IOException iOException) {
        super(iOException.getMessage(), iOException);
        this.f13778d = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z1 a() {
        return new z1("Protocol message tag had invalid wire type.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a2 b() {
        return new a2("Protocol message contained an invalid tag (zero).");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a2 c() {
        return new a2("Protocol message had invalid UTF-8.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a2 d() {
        return new a2("CodedInputStream encountered an embedded string or message which claimed to have negative size.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a2 e() {
        return new a2("Failed to parse the message.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a2 g() {
        return new a2("While parsing a protocol message, the input ended unexpectedly in the middle of a field.  This could mean either that the input has been truncated or that an embedded message misreported its own length.");
    }

    public final a2 f(v2 v2Var) {
        this.f13778d = v2Var;
        return this;
    }

    public a2(String str) {
        super(str);
        this.f13778d = null;
    }
}
