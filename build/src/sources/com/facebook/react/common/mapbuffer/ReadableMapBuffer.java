package com.facebook.react.common.mapbuffer;

import com.facebook.jni.HybridClassBase;
import com.facebook.react.common.mapbuffer.MapBuffer;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.uimanager.ViewProps;
import ir.e0;
import ir.p;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.text.Charsets;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000r\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0010(\n\u0002\b\f\b\u0007\u0018\u0000 Q2\u00020\u00012\u00020\u0002:\u0002RQB\u0019\b\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\n\u001a\u00020\u00002\u0006\u0010\t\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\n\u0010\u000bJ\u000f\u0010\r\u001a\u00020\fH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\u0014\u0010\u0015J\u001f\u0010\u0018\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u00052\u0006\u0010\u0017\u001a\u00020\u0013H\u0002¢\u0006\u0004\b\u0018\u0010\u0019J\u0017\u0010\u001e\u001a\u00020\u001b2\u0006\u0010\u001a\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\u001c\u0010\u001dJ\u0017\u0010 \u001a\u00020\u001f2\u0006\u0010\u001a\u001a\u00020\u0005H\u0002¢\u0006\u0004\b \u0010!J\u0017\u0010\"\u001a\u00020\u00052\u0006\u0010\u001a\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\"\u0010\u0011J\u0017\u0010$\u001a\u00020#2\u0006\u0010\u001a\u001a\u00020\u0005H\u0002¢\u0006\u0004\b$\u0010%J\u0017\u0010'\u001a\u00020&2\u0006\u0010\u001a\u001a\u00020\u0005H\u0002¢\u0006\u0004\b'\u0010(J\u0017\u0010*\u001a\u00020)2\u0006\u0010\u001a\u001a\u00020\u0005H\u0002¢\u0006\u0004\b*\u0010+J\u0017\u0010-\u001a\u00020\u00002\u0006\u0010,\u001a\u00020\u0005H\u0002¢\u0006\u0004\b-\u0010\u000bJ\u001d\u0010/\u001a\b\u0012\u0004\u0012\u00020\u00000.2\u0006\u0010,\u001a\u00020\u0005H\u0002¢\u0006\u0004\b/\u00100J\u0017\u00101\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u0005H\u0002¢\u0006\u0004\b1\u0010\u0011J\u0017\u00102\u001a\u00020&2\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b2\u0010(J\u0017\u00103\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b3\u0010\u0011J\u0017\u00105\u001a\u0002042\u0006\u0010\t\u001a\u00020\u0005H\u0016¢\u0006\u0004\b5\u00106J\u0017\u00107\u001a\u00020\u00132\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b7\u0010\u0015J\u0017\u00108\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b8\u0010\u0011J\u0017\u00109\u001a\u00020#2\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b9\u0010%J\u0017\u0010:\u001a\u00020\u001f2\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b:\u0010!J\u0017\u0010;\u001a\u00020)2\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b;\u0010+J\u0017\u0010<\u001a\u00020&2\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b<\u0010(J\u0017\u0010=\u001a\u00020\u00002\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b=\u0010\u000bJ\u001d\u0010>\u001a\b\u0012\u0004\u0012\u00020\u00000.2\u0006\u0010\u0016\u001a\u00020\u0005H\u0016¢\u0006\u0004\b>\u00100J\u000f\u0010?\u001a\u00020\u0005H\u0016¢\u0006\u0004\b?\u0010@J\u001a\u0010C\u001a\u00020&2\b\u0010B\u001a\u0004\u0018\u00010AH\u0096\u0002¢\u0006\u0004\bC\u0010DJ\u000f\u0010E\u001a\u00020)H\u0016¢\u0006\u0004\bE\u0010FJ\u0016\u0010H\u001a\b\u0012\u0004\u0012\u0002040GH\u0096\u0002¢\u0006\u0004\bH\u0010IR\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0004\u0010JR\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0006\u0010KR$\u0010M\u001a\u00020\u00052\u0006\u0010L\u001a\u00020\u00058\u0016@RX\u0096\u000e¢\u0006\f\n\u0004\bM\u0010K\u001a\u0004\bN\u0010@R\u0014\u0010P\u001a\u00020\u00058BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bO\u0010@¨\u0006S"}, d2 = {"Lcom/facebook/react/common/mapbuffer/ReadableMapBuffer;", "Lcom/facebook/jni/HybridClassBase;", "Lcom/facebook/react/common/mapbuffer/MapBuffer;", "Ljava/nio/ByteBuffer;", "buffer", "", "offsetToMapBuffer", "<init>", "(Ljava/nio/ByteBuffer;I)V", "offset", "cloneWithOffset", "(I)Lcom/facebook/react/common/mapbuffer/ReadableMapBuffer;", "", "readHeader", "()V", "intKey", "getBucketIndexForKey", "(I)I", "bucketIndex", "Lcom/facebook/react/common/mapbuffer/MapBuffer$DataType;", "readDataType", "(I)Lcom/facebook/react/common/mapbuffer/MapBuffer$DataType;", "key", "expected", "getTypedValueOffsetForKey", "(ILcom/facebook/react/common/mapbuffer/MapBuffer$DataType;)I", "bufferPosition", "Lir/e0;", "readUnsignedShort-BwKQO78", "(I)S", "readUnsignedShort", "", "readDoubleValue", "(I)D", "readIntValue", "", "readLongValue", "(I)J", "", "readBooleanValue", "(I)Z", "", "readStringValue", "(I)Ljava/lang/String;", ViewProps.POSITION, "readMapBufferValue", "", "readMapBufferListValue", "(I)Ljava/util/List;", "getKeyOffsetForBucketIndex", "contains", "getKeyOffset", "Lcom/facebook/react/common/mapbuffer/MapBuffer$Entry;", "entryAt", "(I)Lcom/facebook/react/common/mapbuffer/MapBuffer$Entry;", "getType", "getInt", "getLong", "getDouble", "getString", "getBoolean", "getMapBuffer", "getMapBufferList", "hashCode", "()I", "", "other", "equals", "(Ljava/lang/Object;)Z", "toString", "()Ljava/lang/String;", "", "iterator", "()Ljava/util/Iterator;", "Ljava/nio/ByteBuffer;", "I", "value", "count", "getCount", "getOffsetForDynamicData", "offsetForDynamicData", "Companion", "MapBufferEntry", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
@SourceDebugExtension({"SMAP\nReadableMapBuffer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReadableMapBuffer.kt\ncom/facebook/react/common/mapbuffer/ReadableMapBuffer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,335:1\n1#2:336\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReadableMapBuffer extends HybridClassBase implements MapBuffer {
    private static final int ALIGNMENT = 254;
    private static final int BUCKET_SIZE = 12;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final MapBuffer.DataType[] DATA_TYPES = MapBuffer.DataType.values();
    private static final int HEADER_SIZE = 8;
    private static final int TYPE_OFFSET = 2;
    private static final int VALUE_OFFSET = 4;
    @NotNull
    private final ByteBuffer buffer;
    private int count;
    private final int offsetToMapBuffer;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u0016\u0010\n\u001a\b\u0012\u0004\u0012\u00020\f0\u000bX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/facebook/react/common/mapbuffer/ReadableMapBuffer$Companion;", "", "<init>", "()V", "ALIGNMENT", "", "HEADER_SIZE", "BUCKET_SIZE", "TYPE_OFFSET", "VALUE_OFFSET", "DATA_TYPES", "", "Lcom/facebook/react/common/mapbuffer/MapBuffer$DataType;", "[Lcom/facebook/react/common/mapbuffer/MapBuffer$DataType;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0006\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0082\u0004\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\n\u001a\u00020\u00038VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u0014\u0010\r\u001a\u00020\t8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000fR\u0014\u0010\u0010\u001a\u00020\u00118VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0014\u001a\u00020\u00038VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0015\u0010\fR\u0014\u0010\u0016\u001a\u00020\u00178VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0018\u0010\u0019R\u0014\u0010\u001a\u001a\u00020\u001b8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001c\u0010\u001dR\u0014\u0010\u001e\u001a\u00020\u001f8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b \u0010!R\u0014\u0010\"\u001a\u00020#8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b$\u0010%¨\u0006&"}, d2 = {"Lcom/facebook/react/common/mapbuffer/ReadableMapBuffer$MapBufferEntry;", "Lcom/facebook/react/common/mapbuffer/MapBuffer$Entry;", "bucketOffset", "", "<init>", "(Lcom/facebook/react/common/mapbuffer/ReadableMapBuffer;I)V", "assertType", "", "expected", "Lcom/facebook/react/common/mapbuffer/MapBuffer$DataType;", "key", "getKey", "()I", "type", "getType", "()Lcom/facebook/react/common/mapbuffer/MapBuffer$DataType;", "doubleValue", "", "getDoubleValue", "()D", "intValue", "getIntValue", "longValue", "", "getLongValue", "()J", "booleanValue", "", "getBooleanValue", "()Z", "stringValue", "", "getStringValue", "()Ljava/lang/String;", "mapBufferValue", "Lcom/facebook/react/common/mapbuffer/MapBuffer;", "getMapBufferValue", "()Lcom/facebook/react/common/mapbuffer/MapBuffer;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class MapBufferEntry implements MapBuffer.Entry {
        private final int bucketOffset;

        public MapBufferEntry(int i10) {
            this.bucketOffset = i10;
        }

        private final void assertType(MapBuffer.DataType dataType) {
            MapBuffer.DataType type = getType();
            if (dataType == type) {
                return;
            }
            int key = getKey();
            throw new IllegalStateException(("Expected " + dataType + " for key: " + key + " found " + type + " instead.").toString());
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        public boolean getBooleanValue() {
            assertType(MapBuffer.DataType.BOOL);
            return ReadableMapBuffer.this.readBooleanValue(this.bucketOffset + 4);
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        public double getDoubleValue() {
            assertType(MapBuffer.DataType.DOUBLE);
            return ReadableMapBuffer.this.readDoubleValue(this.bucketOffset + 4);
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        public int getIntValue() {
            assertType(MapBuffer.DataType.INT);
            return ReadableMapBuffer.this.readIntValue(this.bucketOffset + 4);
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        public int getKey() {
            return ReadableMapBuffer.this.m1160readUnsignedShortBwKQO78(this.bucketOffset) & 65535;
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        public long getLongValue() {
            assertType(MapBuffer.DataType.LONG);
            return ReadableMapBuffer.this.readLongValue(this.bucketOffset + 4);
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        @NotNull
        public MapBuffer getMapBufferValue() {
            assertType(MapBuffer.DataType.MAP);
            return ReadableMapBuffer.this.readMapBufferValue(this.bucketOffset + 4);
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        @NotNull
        public String getStringValue() {
            assertType(MapBuffer.DataType.STRING);
            return ReadableMapBuffer.this.readStringValue(this.bucketOffset + 4);
        }

        @Override // com.facebook.react.common.mapbuffer.MapBuffer.Entry
        @NotNull
        public MapBuffer.DataType getType() {
            if (ReactNativeFeatureFlags.enableAndroidTextMeasurementOptimizations()) {
                return ReadableMapBuffer.DATA_TYPES[65535 & ReadableMapBuffer.this.m1160readUnsignedShortBwKQO78(this.bucketOffset + 2)];
            }
            return MapBuffer.DataType.values()[65535 & ReadableMapBuffer.this.m1160readUnsignedShortBwKQO78(this.bucketOffset + 2)];
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[MapBuffer.DataType.values().length];
            try {
                iArr[MapBuffer.DataType.BOOL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[MapBuffer.DataType.INT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[MapBuffer.DataType.LONG.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[MapBuffer.DataType.DOUBLE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[MapBuffer.DataType.STRING.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[MapBuffer.DataType.MAP.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    @fb.a
    private ReadableMapBuffer(ByteBuffer byteBuffer, int i10) {
        this.buffer = byteBuffer;
        this.offsetToMapBuffer = i10;
        readHeader();
    }

    private final ReadableMapBuffer cloneWithOffset(int i10) {
        ByteBuffer duplicate = this.buffer.duplicate();
        duplicate.position(i10);
        Intrinsics.checkNotNullExpressionValue(duplicate, "apply(...)");
        return new ReadableMapBuffer(duplicate, i10);
    }

    private final int getBucketIndexForKey(int i10) {
        IntRange kEY_RANGE$ReactAndroid_release = MapBuffer.Companion.getKEY_RANGE$ReactAndroid_release();
        int d10 = kEY_RANGE$ReactAndroid_release.d();
        if (i10 <= kEY_RANGE$ReactAndroid_release.e() && d10 <= i10) {
            short d11 = e0.d((short) i10);
            int count = getCount() - 1;
            int i11 = 0;
            while (i11 <= count) {
                int i12 = (i11 + count) >>> 1;
                int m1160readUnsignedShortBwKQO78 = m1160readUnsignedShortBwKQO78(getKeyOffsetForBucketIndex(i12)) & 65535;
                int i13 = 65535 & d11;
                if (Intrinsics.compare(m1160readUnsignedShortBwKQO78, i13) < 0) {
                    i11 = i12 + 1;
                } else if (Intrinsics.compare(m1160readUnsignedShortBwKQO78, i13) > 0) {
                    count = i12 - 1;
                } else {
                    return i12;
                }
            }
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int getKeyOffsetForBucketIndex(int i10) {
        return this.offsetToMapBuffer + 8 + (i10 * 12);
    }

    private final int getOffsetForDynamicData() {
        return getKeyOffsetForBucketIndex(getCount());
    }

    private final int getTypedValueOffsetForKey(int i10, MapBuffer.DataType dataType) {
        int bucketIndexForKey = getBucketIndexForKey(i10);
        if (bucketIndexForKey != -1) {
            MapBuffer.DataType readDataType = readDataType(bucketIndexForKey);
            if (readDataType == dataType) {
                return getKeyOffsetForBucketIndex(bucketIndexForKey) + 4;
            }
            throw new IllegalStateException(("Expected " + dataType + " for key: " + i10 + ", found " + readDataType + " instead.").toString());
        }
        throw new IllegalArgumentException(("Key not found: " + i10).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean readBooleanValue(int i10) {
        if (readIntValue(i10) == 1) {
            return true;
        }
        return false;
    }

    private final MapBuffer.DataType readDataType(int i10) {
        int m1160readUnsignedShortBwKQO78 = m1160readUnsignedShortBwKQO78(getKeyOffsetForBucketIndex(i10) + 2) & 65535;
        if (ReactNativeFeatureFlags.enableAndroidTextMeasurementOptimizations()) {
            return DATA_TYPES[m1160readUnsignedShortBwKQO78];
        }
        return MapBuffer.DataType.values()[m1160readUnsignedShortBwKQO78];
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final double readDoubleValue(int i10) {
        return this.buffer.getDouble(i10);
    }

    private final void readHeader() {
        if (this.buffer.getShort() != ALIGNMENT) {
            this.buffer.order(ByteOrder.LITTLE_ENDIAN);
        }
        this.count = m1160readUnsignedShortBwKQO78(this.buffer.position()) & 65535;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int readIntValue(int i10) {
        return this.buffer.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final long readLongValue(int i10) {
        return this.buffer.getLong(i10);
    }

    private final List<ReadableMapBuffer> readMapBufferListValue(int i10) {
        ArrayList arrayList = new ArrayList();
        int offsetForDynamicData = getOffsetForDynamicData() + this.buffer.getInt(i10);
        int i11 = this.buffer.getInt(offsetForDynamicData);
        int i12 = offsetForDynamicData + 4;
        int i13 = 0;
        while (i13 < i11) {
            int i14 = this.buffer.getInt(i12 + i13);
            int i15 = i13 + 4;
            arrayList.add(cloneWithOffset(i12 + i15));
            i13 = i15 + i14;
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ReadableMapBuffer readMapBufferValue(int i10) {
        return cloneWithOffset(getOffsetForDynamicData() + this.buffer.getInt(i10) + 4);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String readStringValue(int i10) {
        int offsetForDynamicData = getOffsetForDynamicData() + this.buffer.getInt(i10);
        int i11 = this.buffer.getInt(offsetForDynamicData);
        byte[] bArr = new byte[i11];
        this.buffer.position(offsetForDynamicData + 4);
        this.buffer.get(bArr, 0, i11);
        return new String(bArr, Charsets.UTF_8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: readUnsignedShort-BwKQO78  reason: not valid java name */
    public final short m1160readUnsignedShortBwKQO78(int i10) {
        return e0.d(this.buffer.getShort(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence toString$lambda$5(MapBuffer.Entry entry) {
        Intrinsics.checkNotNullParameter(entry, "entry");
        StringBuilder sb2 = new StringBuilder();
        sb2.append(entry.getKey());
        sb2.append('=');
        switch (WhenMappings.$EnumSwitchMapping$0[entry.getType().ordinal()]) {
            case 1:
                sb2.append(entry.getBooleanValue());
                return sb2;
            case 2:
                sb2.append(entry.getIntValue());
                return sb2;
            case 3:
                sb2.append(entry.getLongValue());
                return sb2;
            case 4:
                sb2.append(entry.getDoubleValue());
                return sb2;
            case 5:
                sb2.append('\"');
                sb2.append(entry.getStringValue());
                sb2.append('\"');
                return sb2;
            case 6:
                sb2.append(entry.getMapBufferValue().toString());
                return sb2;
            default:
                throw new p();
        }
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    public boolean contains(int i10) {
        if (getBucketIndexForKey(i10) != -1) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    @NotNull
    public MapBuffer.Entry entryAt(int i10) {
        return new MapBufferEntry(getKeyOffsetForBucketIndex(i10));
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof ReadableMapBuffer)) {
            return false;
        }
        ByteBuffer byteBuffer = this.buffer;
        ByteBuffer byteBuffer2 = ((ReadableMapBuffer) obj).buffer;
        if (byteBuffer == byteBuffer2) {
            return true;
        }
        byteBuffer.rewind();
        byteBuffer2.rewind();
        return Intrinsics.areEqual(byteBuffer, byteBuffer2);
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    public boolean getBoolean(int i10) {
        return readBooleanValue(getTypedValueOffsetForKey(i10, MapBuffer.DataType.BOOL));
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    public int getCount() {
        return this.count;
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    public double getDouble(int i10) {
        return readDoubleValue(getTypedValueOffsetForKey(i10, MapBuffer.DataType.DOUBLE));
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    public int getInt(int i10) {
        return readIntValue(getTypedValueOffsetForKey(i10, MapBuffer.DataType.INT));
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    public int getKeyOffset(int i10) {
        return getBucketIndexForKey(i10);
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    public long getLong(int i10) {
        return readLongValue(getTypedValueOffsetForKey(i10, MapBuffer.DataType.LONG));
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    @NotNull
    public List<ReadableMapBuffer> getMapBufferList(int i10) {
        return readMapBufferListValue(getTypedValueOffsetForKey(i10, MapBuffer.DataType.MAP));
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    @NotNull
    public String getString(int i10) {
        return readStringValue(getTypedValueOffsetForKey(i10, MapBuffer.DataType.STRING));
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    @NotNull
    public MapBuffer.DataType getType(int i10) {
        int bucketIndexForKey = getBucketIndexForKey(i10);
        if (bucketIndexForKey != -1) {
            return readDataType(bucketIndexForKey);
        }
        throw new IllegalArgumentException(("Key not found: " + i10).toString());
    }

    public int hashCode() {
        this.buffer.rewind();
        return this.buffer.hashCode();
    }

    @Override // java.lang.Iterable
    @NotNull
    public Iterator<MapBuffer.Entry> iterator() {
        return new ReadableMapBuffer$iterator$1(this);
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder("{");
        CollectionsKt.v0(this, sb2, null, null, null, 0, null, new Function1() { // from class: com.facebook.react.common.mapbuffer.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence string$lambda$5;
                string$lambda$5 = ReadableMapBuffer.toString$lambda$5((MapBuffer.Entry) obj);
                return string$lambda$5;
            }
        }, 62, null);
        sb2.append('}');
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    @Override // com.facebook.react.common.mapbuffer.MapBuffer
    @NotNull
    public ReadableMapBuffer getMapBuffer(int i10) {
        return readMapBufferValue(getTypedValueOffsetForKey(i10, MapBuffer.DataType.MAP));
    }
}
