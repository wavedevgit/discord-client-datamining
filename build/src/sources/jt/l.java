package jt;

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
    private final InputStream f31341a;

    /* renamed from: b  reason: collision with root package name */
    private final Charset f31342b;

    /* renamed from: c  reason: collision with root package name */
    private final CharsetDecoder f31343c;

    /* renamed from: d  reason: collision with root package name */
    private final ByteBuffer f31344d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31345e;

    /* renamed from: f  reason: collision with root package name */
    private char f31346f;

    public l(InputStream inputStream, Charset charset) {
        Intrinsics.checkNotNullParameter(inputStream, "inputStream");
        Intrinsics.checkNotNullParameter(charset, "charset");
        this.f31341a = inputStream;
        this.f31342b = charset;
        CharsetDecoder newDecoder = charset.newDecoder();
        CodingErrorAction codingErrorAction = CodingErrorAction.REPLACE;
        this.f31343c = newDecoder.onMalformedInput(codingErrorAction).onUnmappableCharacter(codingErrorAction);
        ByteBuffer wrap = ByteBuffer.wrap(f.f31322c.d());
        this.f31344d = wrap;
        wrap.flip();
    }

    private final int a(char[] cArr, int i10, int i11) {
        CharBuffer wrap = CharBuffer.wrap(cArr, i10, i11);
        if (wrap.position() != 0) {
            wrap = wrap.slice();
        }
        boolean z10 = false;
        while (true) {
            CoderResult decode = this.f31343c.decode(this.f31344d, wrap, z10);
            if (decode.isUnderflow()) {
                if (z10 || !wrap.hasRemaining()) {
                    break;
                } else if (b() < 0) {
                    if (wrap.position() == 0 && !this.f31344d.hasRemaining()) {
                        z10 = true;
                        break;
                    }
                    this.f31343c.reset();
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
            this.f31343c.reset();
        }
        if (wrap.position() == 0) {
            return -1;
        }
        return wrap.position();
    }

    private final int b() {
        int i10;
        this.f31344d.compact();
        try {
            int limit = this.f31344d.limit();
            int position = this.f31344d.position();
            if (position <= limit) {
                i10 = limit - position;
            } else {
                i10 = 0;
            }
            int read = this.f31341a.read(this.f31344d.array(), this.f31344d.arrayOffset() + position, i10);
            if (read < 0) {
                return read;
            }
            ByteBuffer byteBuffer = this.f31344d;
            Intrinsics.checkNotNull(byteBuffer, "null cannot be cast to non-null type java.nio.Buffer");
            byteBuffer.position(position + read);
            this.f31344d.flip();
            return this.f31344d.remaining();
        } finally {
            this.f31344d.flip();
        }
    }

    private final int c() {
        if (this.f31345e) {
            this.f31345e = false;
            return this.f31346f;
        }
        char[] cArr = new char[2];
        int d10 = d(cArr, 0, 2);
        if (d10 == -1) {
            return -1;
        }
        if (d10 != 1) {
            if (d10 == 2) {
                this.f31346f = cArr[1];
                this.f31345e = true;
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
            if (this.f31345e) {
                array[i10] = this.f31346f;
                i10++;
                i11--;
                this.f31345e = false;
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
        f fVar = f.f31322c;
        byte[] array = this.f31344d.array();
        Intrinsics.checkNotNullExpressionValue(array, "array(...)");
        fVar.c(array);
    }
}
