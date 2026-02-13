package vt;

import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.nio.charset.CharsetDecoder;
import java.nio.charset.CoderResult;
import java.nio.charset.CodingErrorAction;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final InputStream f52484a;

    /* renamed from: b  reason: collision with root package name */
    private final Charset f52485b;

    /* renamed from: c  reason: collision with root package name */
    private final CharsetDecoder f52486c;

    /* renamed from: d  reason: collision with root package name */
    private final ByteBuffer f52487d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f52488e;

    /* renamed from: f  reason: collision with root package name */
    private char f52489f;

    public l(InputStream inputStream, Charset charset) {
        Intrinsics.checkNotNullParameter(inputStream, "inputStream");
        Intrinsics.checkNotNullParameter(charset, "charset");
        this.f52484a = inputStream;
        this.f52485b = charset;
        CharsetDecoder newDecoder = charset.newDecoder();
        CodingErrorAction codingErrorAction = CodingErrorAction.REPLACE;
        this.f52486c = newDecoder.onMalformedInput(codingErrorAction).onUnmappableCharacter(codingErrorAction);
        ByteBuffer wrap = ByteBuffer.wrap(f.f52465c.d());
        this.f52487d = wrap;
        wrap.flip();
    }

    private final int a(char[] cArr, int i10, int i11) {
        CharBuffer wrap = CharBuffer.wrap(cArr, i10, i11);
        if (wrap.position() != 0) {
            wrap = wrap.slice();
        }
        boolean z10 = false;
        while (true) {
            CoderResult decode = this.f52486c.decode(this.f52487d, wrap, z10);
            if (decode.isUnderflow()) {
                if (z10 || !wrap.hasRemaining()) {
                    break;
                } else if (b() < 0) {
                    if (wrap.position() == 0 && !this.f52487d.hasRemaining()) {
                        z10 = true;
                        break;
                    }
                    this.f52486c.reset();
                    z10 = true;
                } else {
                    continue;
                }
            } else if (decode.isOverflow()) {
                wrap.position();
                break;
            } else {
                decode.throwException();
            }
        }
        if (z10) {
            this.f52486c.reset();
        }
        if (wrap.position() == 0) {
            return -1;
        }
        return wrap.position();
    }

    private final int b() {
        int i10;
        this.f52487d.compact();
        try {
            int limit = this.f52487d.limit();
            int position = this.f52487d.position();
            if (position <= limit) {
                i10 = limit - position;
            } else {
                i10 = 0;
            }
            int read = this.f52484a.read(this.f52487d.array(), this.f52487d.arrayOffset() + position, i10);
            if (read < 0) {
                return read;
            }
            ByteBuffer byteBuffer = this.f52487d;
            Intrinsics.checkNotNull(byteBuffer, "null cannot be cast to non-null type java.nio.Buffer");
            byteBuffer.position(position + read);
            this.f52487d.flip();
            return this.f52487d.remaining();
        } finally {
            this.f52487d.flip();
        }
    }

    private final int c() {
        if (this.f52488e) {
            this.f52488e = false;
            return this.f52489f;
        }
        char[] cArr = new char[2];
        int d10 = d(cArr, 0, 2);
        if (d10 == -1) {
            return -1;
        }
        if (d10 != 1) {
            if (d10 == 2) {
                this.f52489f = cArr[1];
                this.f52488e = true;
                return cArr[0];
            }
            throw new IllegalStateException(("Unreachable state: " + d10).toString());
        }
        return cArr[0];
    }

    public final int d(char[] array, int i10, int i11) {
        Intrinsics.checkNotNullParameter(array, "array");
        int i12 = 0;
        if (i11 == 0) {
            return 0;
        }
        if (i10 >= 0 && i10 < array.length && i11 >= 0 && i10 + i11 <= array.length) {
            if (this.f52488e) {
                array[i10] = this.f52489f;
                i10++;
                i11--;
                this.f52488e = false;
                if (i11 == 0) {
                    return 1;
                }
                i12 = 1;
            }
            if (i11 == 1) {
                int c10 = c();
                if (c10 == -1) {
                    if (i12 == 0) {
                        return -1;
                    }
                    return i12;
                }
                array[i10] = (char) c10;
                return i12 + 1;
            }
            return a(array, i10, i11) + i12;
        }
        throw new IllegalArgumentException(("Unexpected arguments: " + i10 + ", " + i11 + ", " + array.length).toString());
    }

    public final void e() {
        f fVar = f.f52465c;
        byte[] array = this.f52487d.array();
        Intrinsics.checkNotNullExpressionValue(array, "array(...)");
        fVar.c(array);
    }
}
