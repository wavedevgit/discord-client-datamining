package com.facebook.react.devsupport;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\b\u0000\u0018\u0000 \u001b2\u00020\u0001:\u0002\u001a\u001bB\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000e\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rJ\u001c\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0002J \u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0015\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0002J8\u0010\u0016\u001a\u00020\u00132\u0014\u0010\u0017\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u000f2\u0006\u0010\u0018\u001a\u00020\t2\u0006\u0010\u0019\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/facebook/react/devsupport/MultipartStreamReader;", "", "source", "Lokio/BufferedSource;", "boundary", "", "<init>", "(Lokio/BufferedSource;Ljava/lang/String;)V", "lastProgressEvent", "", "readAllParts", "", "listener", "Lcom/facebook/react/devsupport/MultipartStreamReader$ChunkListener;", "parseHeaders", "", "data", "Lokio/Buffer;", "emitChunk", "", "chunk", "done", "emitProgress", "headers", "contentLength", "isFinal", "ChunkListener", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMultipartStreamReader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MultipartStreamReader.kt\ncom/facebook/react/devsupport/MultipartStreamReader\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n+ 4 Strings.kt\nkotlin/text/StringsKt__StringsKt\n*L\n1#1,168:1\n739#2,9:169\n37#3:178\n36#3,3:179\n108#4:182\n80#4,22:183\n108#4:205\n80#4,22:206\n*S KotlinDebug\n*F\n+ 1 MultipartStreamReader.kt\ncom/facebook/react/devsupport/MultipartStreamReader\n*L\n116#1:169,9\n116#1:178\n116#1:179,3\n122#1:182\n122#1:183,22\n123#1:205\n123#1:206,22\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MultipartStreamReader {
    @NotNull
    private static final String CRLF = "\r\n";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String boundary;
    private long lastProgressEvent;
    @NotNull
    private final BufferedSource source;

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0002\bf\u0018\u00002\u00020\u0001J,\u0010\u0002\u001a\u00020\u00032\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u00052\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nH&J,\u0010\u000b\u001a\u00020\u00032\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u00052\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\rH&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u000fÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/devsupport/MultipartStreamReader$ChunkListener;", "", "onChunkComplete", "", "headers", "", "", "body", "Lokio/Buffer;", "isLastChunk", "", "onChunkProgress", "loaded", "", "total", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ChunkListener {
        void onChunkComplete(@NotNull Map<String, String> map, @NotNull Buffer buffer, boolean z10);

        void onChunkProgress(@NotNull Map<String, String> map, long j10, long j11);
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/devsupport/MultipartStreamReader$Companion;", "", "<init>", "()V", "CRLF", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public MultipartStreamReader(@NotNull BufferedSource source, @NotNull String boundary) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(boundary, "boundary");
        this.source = source;
        this.boundary = boundary;
    }

    private final void emitChunk(Buffer buffer, boolean z10, ChunkListener chunkListener) {
        ByteString b10 = ByteString.f44363o.b("\r\n\r\n");
        long U = buffer.U(b10);
        if (U == -1) {
            chunkListener.onChunkComplete(kotlin.collections.o0.i(), buffer, z10);
            return;
        }
        Buffer buffer2 = new Buffer();
        Buffer buffer3 = new Buffer();
        buffer.read(buffer2, U);
        buffer.skip(b10.a());
        buffer.e2(buffer3);
        chunkListener.onChunkComplete(parseHeaders(buffer2), buffer3, z10);
    }

    private final void emitProgress(Map<String, String> map, long j10, boolean z10, ChunkListener chunkListener) {
        if (chunkListener != null && map != null) {
            long currentTimeMillis = System.currentTimeMillis();
            if (currentTimeMillis - this.lastProgressEvent > 16 || z10) {
                this.lastProgressEvent = currentTimeMillis;
                chunkListener.onChunkProgress(map, j10, Long.parseLong(map.getOrDefault("Content-Length", "0")));
            }
        }
    }

    private final Map<String, String> parseHeaders(Buffer buffer) {
        List l10;
        String[] strArr;
        int i10;
        boolean z10;
        int i11;
        boolean z11;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        List k10 = new Regex(CRLF).k(buffer.T1(), 0);
        if (!k10.isEmpty()) {
            ListIterator listIterator = k10.listIterator(k10.size());
            while (listIterator.hasPrevious()) {
                if (((String) listIterator.previous()).length() != 0) {
                    l10 = CollectionsKt.a1(k10, listIterator.nextIndex() + 1);
                    break;
                }
            }
        }
        l10 = CollectionsKt.l();
        for (String str : (String[]) l10.toArray(new String[0])) {
            int i02 = StringsKt.i0(str, ":", 0, false, 6, null);
            if (i02 != -1) {
                String substring = str.substring(0, i02);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                int length = substring.length() - 1;
                int i12 = 0;
                boolean z12 = false;
                while (i12 <= length) {
                    if (!z12) {
                        i11 = i12;
                    } else {
                        i11 = length;
                    }
                    if (Intrinsics.compare((int) substring.charAt(i11), 32) <= 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (!z12) {
                        if (!z11) {
                            z12 = true;
                        } else {
                            i12++;
                        }
                    } else if (!z11) {
                        break;
                    } else {
                        length--;
                    }
                }
                String obj = substring.subSequence(i12, length + 1).toString();
                String substring2 = str.substring(i02 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                int length2 = substring2.length() - 1;
                int i13 = 0;
                boolean z13 = false;
                while (i13 <= length2) {
                    if (!z13) {
                        i10 = i13;
                    } else {
                        i10 = length2;
                    }
                    if (Intrinsics.compare((int) substring2.charAt(i10), 32) <= 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (!z13) {
                        if (!z10) {
                            z13 = true;
                        } else {
                            i13++;
                        }
                    } else if (!z10) {
                        break;
                    } else {
                        length2--;
                    }
                }
                linkedHashMap.put(obj, substring2.subSequence(i13, length2 + 1).toString());
            }
        }
        return linkedHashMap;
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x00cc  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x00cb A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean readAllParts(@org.jetbrains.annotations.NotNull com.facebook.react.devsupport.MultipartStreamReader.ChunkListener r26) {
        /*
            Method dump skipped, instructions count: 264
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.devsupport.MultipartStreamReader.readAllParts(com.facebook.react.devsupport.MultipartStreamReader$ChunkListener):boolean");
    }
}
