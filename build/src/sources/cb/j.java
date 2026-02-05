package cb;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.Iterator;
import kotlin.Pair;
import kotlin.collections.m0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import or.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    public static final j f7450a = new j();

    private j() {
    }

    private final boolean a(byte[] bArr, String str) {
        if (bArr.length != str.length()) {
            return false;
        }
        IntRange W = kotlin.collections.i.W(bArr);
        if ((W instanceof Collection) && ((Collection) W).isEmpty()) {
            return true;
        }
        Iterator it = W.iterator();
        while (it.hasNext()) {
            int nextInt = ((m0) it).nextInt();
            if (((byte) str.charAt(nextInt)) != bArr[nextInt]) {
                return false;
            }
        }
        return true;
    }

    public static final int b(InputStream stream) {
        Intrinsics.checkNotNullParameter(stream, "stream");
        j jVar = f7450a;
        return (jVar.e(stream) << 8) | jVar.e(stream);
    }

    private final String c(byte[] bArr) {
        StringBuilder sb2 = new StringBuilder();
        for (byte b10 : bArr) {
            sb2.append((char) (e0.d(b10) & 65535));
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    private final int d(InputStream inputStream) {
        int e10 = e(inputStream);
        int e11 = e(inputStream);
        return (e(inputStream) << 24) | (e(inputStream) << 16) | (e11 << 8) | e10;
    }

    private final int e(InputStream inputStream) {
        return inputStream.read() & SetSpanOperation.SPAN_MAX_PRIORITY;
    }

    public static final Pair f(InputStream stream) {
        j jVar;
        Pair g10;
        Intrinsics.checkNotNullParameter(stream, "stream");
        byte[] bArr = new byte[4];
        try {
            try {
                stream.read(bArr);
                jVar = f7450a;
            } catch (IOException e10) {
                e10.printStackTrace();
            }
            if (jVar.a(bArr, "RIFF")) {
                jVar.d(stream);
                stream.read(bArr);
                if (jVar.a(bArr, "WEBP")) {
                    stream.read(bArr);
                    String c10 = jVar.c(bArr);
                    int hashCode = c10.hashCode();
                    if (hashCode != 2640674) {
                        if (hashCode != 2640718) {
                            if (hashCode == 2640730 && c10.equals("VP8X")) {
                                g10 = jVar.i(stream);
                            }
                            try {
                                stream.close();
                            } catch (IOException e11) {
                                e11.printStackTrace();
                            }
                            return null;
                        } else if (c10.equals("VP8L")) {
                            g10 = jVar.h(stream);
                        } else {
                            stream.close();
                            return null;
                        }
                    } else {
                        if (c10.equals("VP8 ")) {
                            g10 = jVar.g(stream);
                        }
                        stream.close();
                        return null;
                    }
                    try {
                        stream.close();
                        return g10;
                    } catch (IOException e12) {
                        e12.printStackTrace();
                        return g10;
                    }
                }
            }
            try {
                stream.close();
                return null;
            } catch (IOException e13) {
                e13.printStackTrace();
                return null;
            }
        } catch (Throwable th2) {
            try {
                stream.close();
            } catch (IOException e14) {
                e14.printStackTrace();
            }
            throw th2;
        }
    }

    private final Pair g(InputStream inputStream) {
        inputStream.skip(7L);
        int e10 = e(inputStream);
        int e11 = e(inputStream);
        int e12 = e(inputStream);
        if (e10 == 157 && e11 == 1 && e12 == 42) {
            return new Pair(Integer.valueOf(b(inputStream)), Integer.valueOf(b(inputStream)));
        }
        return null;
    }

    private final Pair h(InputStream inputStream) {
        d(inputStream);
        if (e(inputStream) != 47) {
            return null;
        }
        int read = inputStream.read() & SetSpanOperation.SPAN_MAX_PRIORITY;
        int read2 = inputStream.read();
        return new Pair(Integer.valueOf((read | ((read2 & 63) << 8)) + 1), Integer.valueOf((((inputStream.read() & 15) << 10) | ((inputStream.read() & SetSpanOperation.SPAN_MAX_PRIORITY) << 2) | ((read2 & 192) >> 6)) + 1));
    }

    private final Pair i(InputStream inputStream) {
        inputStream.skip(8L);
        return new Pair(Integer.valueOf(j(inputStream) + 1), Integer.valueOf(j(inputStream) + 1));
    }

    private final int j(InputStream inputStream) {
        return (e(inputStream) << 16) | (e(inputStream) << 8) | e(inputStream);
    }
}
