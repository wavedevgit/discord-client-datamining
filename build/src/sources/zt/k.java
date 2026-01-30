package zt;

import java.net.ProtocolException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f56145d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final tt.j f56146a;

    /* renamed from: b  reason: collision with root package name */
    public final int f56147b;

    /* renamed from: c  reason: collision with root package name */
    public final String f56148c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(String statusLine) {
            tt.j jVar;
            int i10;
            String str;
            Intrinsics.checkNotNullParameter(statusLine, "statusLine");
            if (StringsKt.P(statusLine, "HTTP/1.", false, 2, null)) {
                i10 = 9;
                if (statusLine.length() >= 9 && statusLine.charAt(8) == ' ') {
                    int charAt = statusLine.charAt(7) - '0';
                    if (charAt != 0) {
                        if (charAt == 1) {
                            jVar = tt.j.HTTP_1_1;
                        } else {
                            throw new ProtocolException("Unexpected status line: " + statusLine);
                        }
                    } else {
                        jVar = tt.j.HTTP_1_0;
                    }
                } else {
                    throw new ProtocolException("Unexpected status line: " + statusLine);
                }
            } else if (StringsKt.P(statusLine, "ICY ", false, 2, null)) {
                jVar = tt.j.HTTP_1_0;
                i10 = 4;
            } else {
                throw new ProtocolException("Unexpected status line: " + statusLine);
            }
            int i11 = i10 + 3;
            if (statusLine.length() >= i11) {
                try {
                    String substring = statusLine.substring(i10, i11);
                    Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
                    int parseInt = Integer.parseInt(substring);
                    if (statusLine.length() > i11) {
                        if (statusLine.charAt(i11) == ' ') {
                            str = statusLine.substring(i10 + 4);
                            Intrinsics.checkNotNullExpressionValue(str, "this as java.lang.String).substring(startIndex)");
                        } else {
                            throw new ProtocolException("Unexpected status line: " + statusLine);
                        }
                    } else {
                        str = "";
                    }
                    return new k(jVar, parseInt, str);
                } catch (NumberFormatException unused) {
                    throw new ProtocolException("Unexpected status line: " + statusLine);
                }
            }
            throw new ProtocolException("Unexpected status line: " + statusLine);
        }

        private a() {
        }
    }

    public k(tt.j protocol, int i10, String message) {
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        this.f56146a = protocol;
        this.f56147b = i10;
        this.f56148c = message;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        if (this.f56146a == tt.j.HTTP_1_0) {
            sb2.append("HTTP/1.0");
        } else {
            sb2.append("HTTP/1.1");
        }
        sb2.append(' ');
        sb2.append(this.f56147b);
        sb2.append(' ');
        sb2.append(this.f56148c);
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        return sb3;
    }
}
