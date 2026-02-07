package kd;

import com.google.android.exoplayer2.metadata.Metadata;
import gd.e;
import java.nio.ByteBuffer;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.CharsetDecoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import mi.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends e {

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f31584c = Pattern.compile("(.+?)='(.*?)';", 32);

    /* renamed from: a  reason: collision with root package name */
    private final CharsetDecoder f31585a = d.f37219c.newDecoder();

    /* renamed from: b  reason: collision with root package name */
    private final CharsetDecoder f31586b = d.f37218b.newDecoder();

    private String c(ByteBuffer byteBuffer) {
        try {
            return this.f31585a.decode(byteBuffer).toString();
        } catch (CharacterCodingException unused) {
            try {
                String charBuffer = this.f31586b.decode(byteBuffer).toString();
                this.f31586b.reset();
                byteBuffer.rewind();
                return charBuffer;
            } catch (CharacterCodingException unused2) {
                this.f31586b.reset();
                byteBuffer.rewind();
                return null;
            } catch (Throwable th2) {
                this.f31586b.reset();
                byteBuffer.rewind();
                throw th2;
            }
        } finally {
            this.f31585a.reset();
            byteBuffer.rewind();
        }
    }

    @Override // gd.e
    protected Metadata b(gd.c cVar, ByteBuffer byteBuffer) {
        String c10 = c(byteBuffer);
        byte[] bArr = new byte[byteBuffer.limit()];
        byteBuffer.get(bArr);
        String str = null;
        if (c10 == null) {
            return new Metadata(new c(bArr, null, null));
        }
        Matcher matcher = f31584c.matcher(c10);
        String str2 = null;
        for (int i10 = 0; matcher.find(i10); i10 = matcher.end()) {
            String group = matcher.group(1);
            String group2 = matcher.group(2);
            if (group != null) {
                String e10 = mi.b.e(group);
                e10.getClass();
                if (!e10.equals("streamurl")) {
                    if (e10.equals("streamtitle")) {
                        str = group2;
                    }
                } else {
                    str2 = group2;
                }
            }
        }
        return new Metadata(new c(bArr, str, str2));
    }
}
