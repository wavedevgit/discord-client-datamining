package kd;

import com.google.android.exoplayer2.metadata.Metadata;
import gd.e;
import ii.d;
import java.nio.ByteBuffer;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.CharsetDecoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends e {

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f32831c = Pattern.compile("(.+?)='(.*?)';", 32);

    /* renamed from: a  reason: collision with root package name */
    private final CharsetDecoder f32832a = d.f28184c.newDecoder();

    /* renamed from: b  reason: collision with root package name */
    private final CharsetDecoder f32833b = d.f28183b.newDecoder();

    private String c(ByteBuffer byteBuffer) {
        try {
            return this.f32832a.decode(byteBuffer).toString();
        } catch (CharacterCodingException unused) {
            try {
                String charBuffer = this.f32833b.decode(byteBuffer).toString();
                this.f32833b.reset();
                byteBuffer.rewind();
                return charBuffer;
            } catch (CharacterCodingException unused2) {
                this.f32833b.reset();
                byteBuffer.rewind();
                return null;
            } catch (Throwable th2) {
                this.f32833b.reset();
                byteBuffer.rewind();
                throw th2;
            }
        } finally {
            this.f32832a.reset();
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
        Matcher matcher = f32831c.matcher(c10);
        String str2 = null;
        for (int i10 = 0; matcher.find(i10); i10 = matcher.end()) {
            String group = matcher.group(1);
            String group2 = matcher.group(2);
            if (group != null) {
                String e10 = ii.b.e(group);
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
