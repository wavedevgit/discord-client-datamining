package com.linecorp.apng.decoder;

import java.util.NoSuchElementException;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qr.p;
import xr.a;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0003\n\u0002\b\b\n\u0002\u0010\u000e\n\u0002\b\u0005\u0018\u00002\u00060\u0001j\u0002`\u0002:\u0001\u0012B\u001d\b\u0000\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0007\u0010\bB\u0011\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\tR\u0017\u0010\u0004\u001a\u00020\u00038\u0006¢\u0006\f\n\u0004\b\n\u0010\u000b\u001a\u0004\b\f\u0010\rR\u0016\u0010\u0011\u001a\u0004\u0018\u00010\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010¨\u0006\u0013"}, d2 = {"Lcom/linecorp/apng/decoder/ApngException;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "Lcom/linecorp/apng/decoder/ApngException$ErrorCode;", "errorCode", "", "throwable", "<init>", "(Lcom/linecorp/apng/decoder/ApngException$ErrorCode;Ljava/lang/Throwable;)V", "(Ljava/lang/Throwable;)V", "d", "Lcom/linecorp/apng/decoder/ApngException$ErrorCode;", "getErrorCode", "()Lcom/linecorp/apng/decoder/ApngException$ErrorCode;", "", "getMessage", "()Ljava/lang/String;", "message", "ErrorCode", "apng-drawable_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ApngException extends Exception {

    /* renamed from: d  reason: collision with root package name */
    private final ErrorCode f17170d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\u0010\b\n\u0002\b\u0012\b\u0086\u0081\u0002\u0018\u0000 \n2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\nB\u0011\b\u0002\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\b\u0010\tj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000fj\u0002\b\u0010j\u0002\b\u0011j\u0002\b\u0012j\u0002\b\u0013¨\u0006\u0014"}, d2 = {"Lcom/linecorp/apng/decoder/ApngException$ErrorCode;", "", "", "errorCode", "<init>", "(Ljava/lang/String;II)V", "d", "I", "getErrorCode", "()I", "Companion", "ERR_STREAM_READ_FAIL", "ERR_UNEXPECTED_EOF", "ERR_INVALID_FILE_FORMAT", "ERR_NOT_EXIST_IMAGE", "ERR_FRAME_INDEX_OUT_OF_RANGE", "ERR_OUT_OF_MEMORY", "ERR_BITMAP_OPERATION", "ERR_UNSUPPORTED_TYPE", "ERR_WITH_CHILD_EXCEPTION", "apng-drawable_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ErrorCode {
        @NotNull
        public static final Companion Companion;

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ ErrorCode[] f17171e;

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f17172i;

        /* renamed from: d  reason: collision with root package name */
        private final int f17173d;
        public static final ErrorCode ERR_STREAM_READ_FAIL = new ErrorCode("ERR_STREAM_READ_FAIL", 0, -100);
        public static final ErrorCode ERR_UNEXPECTED_EOF = new ErrorCode("ERR_UNEXPECTED_EOF", 1, -101);
        public static final ErrorCode ERR_INVALID_FILE_FORMAT = new ErrorCode("ERR_INVALID_FILE_FORMAT", 2, -102);
        public static final ErrorCode ERR_NOT_EXIST_IMAGE = new ErrorCode("ERR_NOT_EXIST_IMAGE", 3, -103);
        public static final ErrorCode ERR_FRAME_INDEX_OUT_OF_RANGE = new ErrorCode("ERR_FRAME_INDEX_OUT_OF_RANGE", 4, -104);
        public static final ErrorCode ERR_OUT_OF_MEMORY = new ErrorCode("ERR_OUT_OF_MEMORY", 5, -105);
        public static final ErrorCode ERR_BITMAP_OPERATION = new ErrorCode("ERR_BITMAP_OPERATION", 6, -106);
        public static final ErrorCode ERR_UNSUPPORTED_TYPE = new ErrorCode("ERR_UNSUPPORTED_TYPE", 7, -107);
        public static final ErrorCode ERR_WITH_CHILD_EXCEPTION = new ErrorCode("ERR_WITH_CHILD_EXCEPTION", 8, -200);

        @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0015\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0000¢\u0006\u0002\b\b¨\u0006\t"}, d2 = {"Lcom/linecorp/apng/decoder/ApngException$ErrorCode$Companion;", "", "<init>", "()V", "fromErrorCode", "Lcom/linecorp/apng/decoder/ApngException$ErrorCode;", "errorCode", "", "fromErrorCode$apng_drawable_release", "apng-drawable_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        @SourceDebugExtension({"SMAP\nApngException.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ApngException.kt\ncom/linecorp/apng/decoder/ApngException$ErrorCode$Companion\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,102:1\n1137#2,2:103\n*S KotlinDebug\n*F\n+ 1 ApngException.kt\ncom/linecorp/apng/decoder/ApngException$ErrorCode$Companion\n*L\n98#1:103,2\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final ErrorCode fromErrorCode$apng_drawable_release(int i10) {
                ErrorCode[] values;
                for (ErrorCode errorCode : ErrorCode.values()) {
                    if (errorCode.getErrorCode() == i10) {
                        return errorCode;
                    }
                }
                throw new NoSuchElementException("Array contains no element matching the predicate.");
            }

            private Companion() {
            }
        }

        static {
            ErrorCode[] a10 = a();
            f17171e = a10;
            f17172i = a.a(a10);
            Companion = new Companion(null);
        }

        private ErrorCode(String str, int i10, int i11) {
            this.f17173d = i11;
        }

        private static final /* synthetic */ ErrorCode[] a() {
            return new ErrorCode[]{ERR_STREAM_READ_FAIL, ERR_UNEXPECTED_EOF, ERR_INVALID_FILE_FORMAT, ERR_NOT_EXIST_IMAGE, ERR_FRAME_INDEX_OUT_OF_RANGE, ERR_OUT_OF_MEMORY, ERR_BITMAP_OPERATION, ERR_UNSUPPORTED_TYPE, ERR_WITH_CHILD_EXCEPTION};
        }

        @NotNull
        public static EnumEntries getEntries() {
            return f17172i;
        }

        public static ErrorCode valueOf(String str) {
            return (ErrorCode) Enum.valueOf(ErrorCode.class, str);
        }

        public static ErrorCode[] values() {
            return (ErrorCode[]) f17171e.clone();
        }

        public final int getErrorCode() {
            return this.f17173d;
        }
    }

    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[ErrorCode.values().length];
            try {
                iArr[ErrorCode.ERR_STREAM_READ_FAIL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ErrorCode.ERR_UNEXPECTED_EOF.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ErrorCode.ERR_INVALID_FILE_FORMAT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[ErrorCode.ERR_NOT_EXIST_IMAGE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[ErrorCode.ERR_FRAME_INDEX_OUT_OF_RANGE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[ErrorCode.ERR_OUT_OF_MEMORY.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[ErrorCode.ERR_BITMAP_OPERATION.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[ErrorCode.ERR_UNSUPPORTED_TYPE.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[ErrorCode.ERR_WITH_CHILD_EXCEPTION.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public /* synthetic */ ApngException(ErrorCode errorCode, Throwable th2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(errorCode, (i10 & 2) != 0 ? null : th2);
    }

    @NotNull
    public final ErrorCode getErrorCode() {
        return this.f17170d;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        String str;
        switch (WhenMappings.$EnumSwitchMapping$0[this.f17170d.ordinal()]) {
            case 1:
                return "Can't read the stream.";
            case 2:
                return "Unexpected end of file.";
            case 3:
                return "Invalid file format.";
            case 4:
                return "Not exist native image.";
            case 5:
                return "Frame index is out of range.";
            case 6:
                return "Out of memory";
            case 7:
                return "Error in the native bitmap operation.";
            case 8:
                return "Unsupported image type.";
            case 9:
                Throwable cause = getCause();
                if (cause != null) {
                    str = cause.getMessage();
                } else {
                    str = null;
                }
                return "Failed with sub exception : " + str;
            default:
                throw new p();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ApngException(@NotNull ErrorCode errorCode, Throwable th2) {
        super(th2);
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        this.f17170d = errorCode;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ApngException(@NotNull Throwable throwable) {
        this(ErrorCode.ERR_WITH_CHILD_EXCEPTION, throwable);
        Intrinsics.checkNotNullParameter(throwable, "throwable");
    }
}
