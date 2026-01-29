package th;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n {
    public static long a(o oVar, InputStream inputStream, OutputStream outputStream, long j10) {
        OutputStream outputStream2;
        DataInputStream dataInputStream;
        o oVar2;
        int readUnsignedShort;
        byte[] bArr = new byte[16384];
        DataInputStream dataInputStream2 = new DataInputStream(new BufferedInputStream(inputStream, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
        int readInt = dataInputStream2.readInt();
        if (readInt == -771763713) {
            int read = dataInputStream2.read();
            if (read == 4) {
                long j11 = 0;
                while (true) {
                    long j12 = j10 - j11;
                    try {
                        int read2 = dataInputStream2.read();
                        if (read2 != -1) {
                            if (read2 != 0) {
                                switch (read2) {
                                    case 247:
                                        outputStream2 = outputStream;
                                        read2 = dataInputStream2.readUnsignedShort();
                                        c(bArr, dataInputStream2, outputStream2, read2, j12);
                                        continue;
                                        j11 += read2;
                                        outputStream = outputStream2;
                                    case 248:
                                        outputStream2 = outputStream;
                                        read2 = dataInputStream2.readInt();
                                        c(bArr, dataInputStream2, outputStream2, read2, j12);
                                        continue;
                                        j11 += read2;
                                        outputStream = outputStream2;
                                    case 249:
                                        outputStream2 = outputStream;
                                        DataInputStream dataInputStream3 = dataInputStream2;
                                        o oVar3 = oVar;
                                        long readUnsignedShort2 = dataInputStream3.readUnsignedShort();
                                        int read3 = dataInputStream3.read();
                                        if (read3 != -1) {
                                            b(bArr, oVar3, outputStream2, readUnsignedShort2, read3, j12);
                                            oVar = oVar3;
                                            dataInputStream2 = dataInputStream3;
                                            read2 = read3;
                                            continue;
                                            j11 += read2;
                                            outputStream = outputStream2;
                                        } else {
                                            throw new IOException("Unexpected end of patch");
                                        }
                                    case androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                        outputStream2 = outputStream;
                                        dataInputStream = dataInputStream2;
                                        oVar2 = oVar;
                                        readUnsignedShort = dataInputStream.readUnsignedShort();
                                        b(bArr, oVar2, outputStream2, dataInputStream.readUnsignedShort(), readUnsignedShort, j12);
                                        oVar = oVar2;
                                        read2 = readUnsignedShort;
                                        break;
                                    case 251:
                                        outputStream2 = outputStream;
                                        dataInputStream = dataInputStream2;
                                        oVar2 = oVar;
                                        readUnsignedShort = dataInputStream.readInt();
                                        b(bArr, oVar2, outputStream2, dataInputStream.readUnsignedShort(), readUnsignedShort, j12);
                                        oVar = oVar2;
                                        read2 = readUnsignedShort;
                                        break;
                                    case 252:
                                        outputStream2 = outputStream;
                                        dataInputStream = dataInputStream2;
                                        oVar2 = oVar;
                                        long readInt2 = dataInputStream.readInt();
                                        readUnsignedShort = dataInputStream.read();
                                        if (readUnsignedShort != -1) {
                                            b(bArr, oVar2, outputStream2, readInt2, readUnsignedShort, j12);
                                            oVar = oVar2;
                                            read2 = readUnsignedShort;
                                            break;
                                        } else {
                                            throw new IOException("Unexpected end of patch");
                                        }
                                    case 253:
                                        outputStream2 = outputStream;
                                        dataInputStream = dataInputStream2;
                                        oVar2 = oVar;
                                        readUnsignedShort = dataInputStream.readUnsignedShort();
                                        b(bArr, oVar2, outputStream2, dataInputStream.readInt(), readUnsignedShort, j12);
                                        oVar = oVar2;
                                        read2 = readUnsignedShort;
                                        break;
                                    case 254:
                                        outputStream2 = outputStream;
                                        dataInputStream = dataInputStream2;
                                        oVar2 = oVar;
                                        readUnsignedShort = dataInputStream.readInt();
                                        b(bArr, oVar2, outputStream2, dataInputStream.readInt(), readUnsignedShort, j12);
                                        oVar = oVar2;
                                        read2 = readUnsignedShort;
                                        break;
                                    case SetSpanOperation.SPAN_MAX_PRIORITY /* 255 */:
                                        outputStream2 = outputStream;
                                        dataInputStream = dataInputStream2;
                                        long readLong = dataInputStream.readLong();
                                        readUnsignedShort = dataInputStream.readInt();
                                        oVar2 = oVar;
                                        b(bArr, oVar2, outputStream2, readLong, readUnsignedShort, j12);
                                        oVar = oVar2;
                                        read2 = readUnsignedShort;
                                        break;
                                    default:
                                        outputStream2 = outputStream;
                                        try {
                                            c(bArr, dataInputStream2, outputStream2, read2, j12);
                                            dataInputStream = dataInputStream2;
                                            break;
                                        } catch (Throwable th2) {
                                            th = th2;
                                            Throwable th3 = th;
                                            outputStream2.flush();
                                            throw th3;
                                        }
                                }
                                dataInputStream2 = dataInputStream;
                                j11 += read2;
                                outputStream = outputStream2;
                            } else {
                                outputStream.flush();
                                return j11;
                            }
                        } else {
                            throw new IOException("Patch file overrun");
                        }
                    } catch (Throwable th4) {
                        th = th4;
                        outputStream2 = outputStream;
                    }
                }
            } else {
                throw new m("Unexpected version=" + read);
            }
        } else {
            throw new m("Unexpected magic=".concat(String.format("%x", Integer.valueOf(readInt))));
        }
    }

    private static void b(byte[] bArr, o oVar, OutputStream outputStream, long j10, int i10, long j11) {
        if (i10 >= 0) {
            if (j10 >= 0) {
                long j12 = i10;
                if (j12 <= j11) {
                    try {
                        InputStream l10 = new p(oVar, j10, j12).l();
                        while (i10 > 0) {
                            int min = Math.min(i10, 16384);
                            int i11 = 0;
                            while (i11 < min) {
                                int read = l10.read(bArr, i11, min - i11);
                                if (read != -1) {
                                    i11 += read;
                                } else {
                                    throw new IOException("truncated input stream");
                                }
                            }
                            outputStream.write(bArr, 0, min);
                            i10 -= min;
                        }
                        l10.close();
                        return;
                    } catch (EOFException e10) {
                        throw new IOException("patch underrun", e10);
                    }
                }
                throw new IOException("Output length overrun");
            }
            throw new IOException("inputOffset negative");
        }
        throw new IOException("copyLength negative");
    }

    private static void c(byte[] bArr, DataInputStream dataInputStream, OutputStream outputStream, int i10, long j10) {
        if (i10 >= 0) {
            if (i10 <= j10) {
                while (i10 > 0) {
                    try {
                        int min = Math.min(i10, 16384);
                        dataInputStream.readFully(bArr, 0, min);
                        outputStream.write(bArr, 0, min);
                        i10 -= min;
                    } catch (EOFException unused) {
                        throw new IOException("patch underrun");
                    }
                }
                return;
            }
            throw new IOException("Output length overrun");
        }
        throw new IOException("copyLength negative");
    }
}
