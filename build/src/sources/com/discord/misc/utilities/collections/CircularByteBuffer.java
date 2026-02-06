package com.discord.misc.utilities.collections;

import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.uimanager.ViewProps;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.Charsets;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0012\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0005\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0010\u0018\u0000 +2\u00020\u0001:\u0002*+B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0012\u0010\u0013\u001a\u00020\u00142\n\u0010\u0015\u001a\u00060\u0016j\u0002`\u0017J\u000e\u0010\u0018\u001a\u00020\u00142\u0006\u0010\u0019\u001a\u00020\u001aJ\u0006\u0010\u001b\u001a\u00020\u001cJ\u0010\u0010\u001d\u001a\u00020\u00142\u0006\u0010\u001e\u001a\u00020\u0007H\u0002J\u0010\u0010\u001f\u001a\u00020\u00142\u0006\u0010 \u001a\u00020\u0003H\u0002J\b\u0010!\u001a\u00020\u0014H\u0002J\u0010\u0010\"\u001a\u00020\u00142\u0006\u0010#\u001a\u00020\u0007H\u0002J\u0010\u0010$\u001a\u00020\u00142\u0006\u0010%\u001a\u00020\u0012H\u0002J\u0018\u0010&\u001a\u00020\u001a2\u0006\u0010'\u001a\u00020\u00032\u0006\u0010(\u001a\u00020\u0003H\u0002J\u0006\u0010)\u001a\u00020\u0014R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000R \u0010\r\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030\u000f0\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0012X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006,"}, d2 = {"Lcom/discord/misc/utilities/collections/CircularByteBuffer;", "", "maxByteCount", "", "<init>", "(I)V", "buffer", "", "head", "tail", "size", "isEmpty", "", "lines", "Lkotlin/collections/ArrayDeque;", "Lkotlin/Pair;", BaseJavaModule.METHOD_TYPE_SYNC, "newlineByte", "", "appendString", "", "sb", "Ljava/lang/StringBuilder;", "Lkotlin/text/StringBuilder;", "addLine", "line", "", "getStats", "Lcom/discord/misc/utilities/collections/CircularByteBuffer$BufferStats;", "addLineBytes", "lineBytes", "makeSpace", "needed", "removeFrontLine", "writeBytes", "bytes", "writeByte", "byte", "readLine", ViewProps.START, "length", "clear", "BufferStats", "Companion", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CircularByteBuffer {
    @NotNull
    private final byte[] buffer;
    private int head;
    private final int maxByteCount;
    private int size;
    private int tail;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Charset CHARSET = Charsets.UTF_8;
    private boolean isEmpty = true;
    @NotNull
    private final ArrayDeque lines = new ArrayDeque();
    @NotNull
    private final Object sync = new Object();
    private final byte newlineByte = 10;

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\r\n\u0002\u0010\u000e\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003¢\u0006\u0004\b\n\u0010\u000bJ\b\u0010\u0014\u001a\u00020\u0015H\u0016J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003JE\u0010\u001c\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u001d\u001a\u00020\u001e2\b\u0010\u001f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010 \u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\rR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\rR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\rR\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\r¨\u0006!"}, d2 = {"Lcom/discord/misc/utilities/collections/CircularByteBuffer$BufferStats;", "", "linesCount", "", "bytesUsed", "bytesCapacity", "memoryEfficiency", "", "headPosition", "tailPosition", "<init>", "(IIIFII)V", "getLinesCount", "()I", "getBytesUsed", "getBytesCapacity", "getMemoryEfficiency", "()F", "getHeadPosition", "getTailPosition", "toString", "", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "hashCode", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class BufferStats {
        private final int bytesCapacity;
        private final int bytesUsed;
        private final int headPosition;
        private final int linesCount;
        private final float memoryEfficiency;
        private final int tailPosition;

        public BufferStats(int i10, int i11, int i12, float f10, int i13, int i14) {
            this.linesCount = i10;
            this.bytesUsed = i11;
            this.bytesCapacity = i12;
            this.memoryEfficiency = f10;
            this.headPosition = i13;
            this.tailPosition = i14;
        }

        public static /* synthetic */ BufferStats copy$default(BufferStats bufferStats, int i10, int i11, int i12, float f10, int i13, int i14, int i15, Object obj) {
            if ((i15 & 1) != 0) {
                i10 = bufferStats.linesCount;
            }
            if ((i15 & 2) != 0) {
                i11 = bufferStats.bytesUsed;
            }
            if ((i15 & 4) != 0) {
                i12 = bufferStats.bytesCapacity;
            }
            if ((i15 & 8) != 0) {
                f10 = bufferStats.memoryEfficiency;
            }
            if ((i15 & 16) != 0) {
                i13 = bufferStats.headPosition;
            }
            if ((i15 & 32) != 0) {
                i14 = bufferStats.tailPosition;
            }
            int i16 = i13;
            int i17 = i14;
            return bufferStats.copy(i10, i11, i12, f10, i16, i17);
        }

        public final int component1() {
            return this.linesCount;
        }

        public final int component2() {
            return this.bytesUsed;
        }

        public final int component3() {
            return this.bytesCapacity;
        }

        public final float component4() {
            return this.memoryEfficiency;
        }

        public final int component5() {
            return this.headPosition;
        }

        public final int component6() {
            return this.tailPosition;
        }

        @NotNull
        public final BufferStats copy(int i10, int i11, int i12, float f10, int i13, int i14) {
            return new BufferStats(i10, i11, i12, f10, i13, i14);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BufferStats) {
                BufferStats bufferStats = (BufferStats) obj;
                return this.linesCount == bufferStats.linesCount && this.bytesUsed == bufferStats.bytesUsed && this.bytesCapacity == bufferStats.bytesCapacity && Float.compare(this.memoryEfficiency, bufferStats.memoryEfficiency) == 0 && this.headPosition == bufferStats.headPosition && this.tailPosition == bufferStats.tailPosition;
            }
            return false;
        }

        public final int getBytesCapacity() {
            return this.bytesCapacity;
        }

        public final int getBytesUsed() {
            return this.bytesUsed;
        }

        public final int getHeadPosition() {
            return this.headPosition;
        }

        public final int getLinesCount() {
            return this.linesCount;
        }

        public final float getMemoryEfficiency() {
            return this.memoryEfficiency;
        }

        public final int getTailPosition() {
            return this.tailPosition;
        }

        public int hashCode() {
            return (((((((((Integer.hashCode(this.linesCount) * 31) + Integer.hashCode(this.bytesUsed)) * 31) + Integer.hashCode(this.bytesCapacity)) * 31) + Float.hashCode(this.memoryEfficiency)) * 31) + Integer.hashCode(this.headPosition)) * 31) + Integer.hashCode(this.tailPosition);
        }

        @NotNull
        public String toString() {
            int i10 = this.linesCount;
            int i11 = this.bytesUsed;
            int i12 = this.bytesCapacity;
            StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
            String format = String.format(Locale.US, "%.1f", Arrays.copyOf(new Object[]{Float.valueOf(this.memoryEfficiency * 100)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "format(...)");
            int i13 = this.headPosition;
            int i14 = this.tailPosition;
            return "BufferStats(lines=" + i10 + ", used=" + i11 + "B/" + i12 + "B (" + format + "%), head=" + i13 + ", tail=" + i14 + ")";
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/misc/utilities/collections/CircularByteBuffer$Companion;", "", "<init>", "()V", "CHARSET", "Ljava/nio/charset/Charset;", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public CircularByteBuffer(int i10) {
        this.maxByteCount = i10;
        this.buffer = new byte[i10];
    }

    private final void addLineBytes(byte[] bArr) {
        int length = bArr.length + 1;
        makeSpace(length);
        int i10 = this.tail;
        writeBytes(bArr);
        writeByte(this.newlineByte);
        this.lines.addLast(v.a(Integer.valueOf(i10), Integer.valueOf(bArr.length)));
        this.size += length;
        this.isEmpty = false;
    }

    private final void makeSpace(int i10) {
        while (this.size + i10 > this.maxByteCount && !this.lines.isEmpty()) {
            removeFrontLine();
        }
    }

    private final String readLine(int i10, int i11) {
        int i12 = i10 + i11;
        byte[] bArr = this.buffer;
        if (i12 <= bArr.length) {
            return new String(bArr, i10, i11, CHARSET);
        }
        int length = bArr.length - i10;
        int i13 = i11 - length;
        byte[] bArr2 = new byte[i11];
        System.arraycopy(bArr, i10, bArr2, 0, length);
        System.arraycopy(this.buffer, 0, bArr2, length, i13);
        return new String(bArr2, CHARSET);
    }

    private final void removeFrontLine() {
        if (!this.lines.isEmpty()) {
            int intValue = ((Number) ((Pair) this.lines.removeFirst()).b()).intValue() + 1;
            this.head = (this.head + intValue) % this.buffer.length;
            int i10 = this.size - intValue;
            this.size = i10;
            if (i10 == 0) {
                this.isEmpty = true;
                this.head = 0;
                this.tail = 0;
            }
        }
    }

    private final void writeByte(byte b10) {
        byte[] bArr = this.buffer;
        int i10 = this.tail;
        bArr[i10] = b10;
        this.tail = (i10 + 1) % bArr.length;
    }

    private final void writeBytes(byte[] bArr) {
        for (byte b10 : bArr) {
            writeByte(b10);
        }
    }

    public final void addLine(@NotNull String line) {
        Intrinsics.checkNotNullParameter(line, "line");
        synchronized (this.sync) {
            byte[] bytes = line.getBytes(CHARSET);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            addLineBytes(bytes);
            Unit unit = Unit.f32008a;
        }
    }

    public final void appendString(@NotNull StringBuilder sb2) {
        Intrinsics.checkNotNullParameter(sb2, "sb");
        synchronized (this.sync) {
            try {
                Iterator<E> it = this.lines.iterator();
                while (it.hasNext()) {
                    Pair pair = (Pair) it.next();
                    sb2.append(readLine(((Number) pair.a()).intValue(), ((Number) pair.b()).intValue()));
                    sb2.append('\n');
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void clear() {
        synchronized (this.sync) {
            this.head = 0;
            this.tail = 0;
            this.size = 0;
            this.isEmpty = true;
            this.lines.clear();
            Unit unit = Unit.f32008a;
        }
    }

    @NotNull
    public final BufferStats getStats() {
        BufferStats bufferStats;
        float f10;
        synchronized (this.sync) {
            int size = this.lines.size();
            int i10 = this.size;
            int i11 = this.maxByteCount;
            if (i11 > 0) {
                f10 = i10 / i11;
            } else {
                f10 = 0.0f;
            }
            bufferStats = new BufferStats(size, i10, i11, f10, this.head, this.tail);
        }
        return bufferStats;
    }
}
