package ld;

import com.google.android.exoplayer2.metadata.Metadata;
import hd.e;
import java.nio.ByteBuffer;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.CharsetDecoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import pi.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends e {

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f36270c = Pattern.compile("(.+?)='(.*?)';", 32);

    /* renamed from: a  reason: collision with root package name */
    private final CharsetDecoder f36271a = d.f43306c.newDecoder();

    /* renamed from: b  reason: collision with root package name */
    private final CharsetDecoder f36272b = d.f43305b.newDecoder();

    private String c(ByteBuffer byteBuffer) {
        try {
            return this.f36271a.decode(byteBuffer).toString();
        } catch (CharacterCodingException unused) {
            try {
                String charBuffer = this.f36272b.decode(byteBuffer).toString();
                this.f36272b.reset();
                byteBuffer.rewind();
                return charBuffer;
            } catch (CharacterCodingException unused2) {
                this.f36272b.reset();
                byteBuffer.rewind();
                return null;
            } catch (Throwable th2) {
                this.f36272b.reset();
                byteBuffer.rewind();
                throw th2;
            }
        } finally {
            this.f36271a.reset();
            byteBuffer.rewind();
        }
    }

    @Override // hd.e
    protected Metadata b(hd.c cVar, ByteBuffer byteBuffer) {
        String c10 = c(byteBuffer);
        byte[] bArr = new byte[byteBuffer.limit()];
        byteBuffer.get(bArr);
        String str = null;
        if (c10 == null) {
            return new Metadata(new c(bArr, null, null));
        }
        Matcher matcher = f36270c.matcher(c10);
        String str2 = null;
        for (int i10 = 0; matcher.find(i10); i10 = matcher.end()) {
            String group = matcher.group(1);
            String group2 = matcher.group(2);
            if (group != null) {
                String e10 = pi.b.e(group);
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
