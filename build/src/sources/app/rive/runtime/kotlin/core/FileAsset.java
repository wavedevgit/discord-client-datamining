package app.rive.runtime.kotlin.core;

import com.facebook.react.devsupport.StackTraceHelper;
import ir.l;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0012\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b7\u0018\u00002\u00020\u0001B\u0017\b\u0004\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J\u0011\u0010\u0015\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0003H\u0082 J!\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0016\u001a\u00020\u00032\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u0010\u001a\u00020\u0005H\u0082 J\u0011\u0010\u001b\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0003H\u0082 J\u0011\u0010\u001c\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0003H\u0082 J\u000e\u0010\u001d\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aR\u001b\u0010\u0007\u001a\u00020\b8FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\u000b\u0010\f\u001a\u0004\b\t\u0010\nR\u001b\u0010\r\u001a\u00020\b8FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\u000f\u0010\f\u001a\u0004\b\u000e\u0010\nR\u000e\u0010\u0010\u001a\u00020\u0011X\u0082\u0004¢\u0006\u0002\n\u0000R\u001b\u0010\u0012\u001a\u00020\b8FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\u0014\u0010\f\u001a\u0004\b\u0013\u0010\n\u0082\u0001\u0003\u001e\u001f ¨\u0006!"}, d2 = {"Lapp/rive/runtime/kotlin/core/FileAsset;", "Lapp/rive/runtime/kotlin/core/NativeObject;", "address", "", "rendererTypeIdx", "", "(JI)V", "cdnUrl", "", "getCdnUrl", "()Ljava/lang/String;", "cdnUrl$delegate", "Lkotlin/Lazy;", StackTraceHelper.NAME_KEY, "getName", "name$delegate", "rendererType", "Lapp/rive/runtime/kotlin/core/RendererType;", "uniqueFilename", "getUniqueFilename", "uniqueFilename$delegate", "cppCDNUrl", "cppPointer", "cppDecode", "", "bytes", "", "cppName", "cppUniqueFilename", "decode", "Lapp/rive/runtime/kotlin/core/AudioAsset;", "Lapp/rive/runtime/kotlin/core/FontAsset;", "Lapp/rive/runtime/kotlin/core/ImageAsset;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class FileAsset extends NativeObject {
    public static final int $stable = 8;
    @NotNull
    private final Lazy cdnUrl$delegate;
    @NotNull
    private final Lazy name$delegate;
    @NotNull
    private final RendererType rendererType;
    @NotNull
    private final Lazy uniqueFilename$delegate;

    public /* synthetic */ FileAsset(long j10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final native String cppCDNUrl(long j10);

    private final native boolean cppDecode(long j10, byte[] bArr, int i10);

    /* JADX INFO: Access modifiers changed from: private */
    public final native String cppName(long j10);

    /* JADX INFO: Access modifiers changed from: private */
    public final native String cppUniqueFilename(long j10);

    public final boolean decode(@NotNull byte[] bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return cppDecode(getCppPointer(), bytes, this.rendererType.getValue());
    }

    @NotNull
    public final String getCdnUrl() {
        return (String) this.cdnUrl$delegate.getValue();
    }

    @NotNull
    public final String getName() {
        return (String) this.name$delegate.getValue();
    }

    @NotNull
    public final String getUniqueFilename() {
        return (String) this.uniqueFilename$delegate.getValue();
    }

    private FileAsset(long j10, int i10) {
        super(j10);
        this.rendererType = RendererType.Companion.fromIndex(i10);
        this.name$delegate = l.b(new Function0<String>() { // from class: app.rive.runtime.kotlin.core.FileAsset$name$2
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                String cppName;
                FileAsset fileAsset = FileAsset.this;
                cppName = fileAsset.cppName(fileAsset.getCppPointer());
                return cppName;
            }
        });
        this.uniqueFilename$delegate = l.b(new Function0<String>() { // from class: app.rive.runtime.kotlin.core.FileAsset$uniqueFilename$2
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                String cppUniqueFilename;
                FileAsset fileAsset = FileAsset.this;
                cppUniqueFilename = fileAsset.cppUniqueFilename(fileAsset.getCppPointer());
                return cppUniqueFilename;
            }
        });
        this.cdnUrl$delegate = l.b(new Function0<String>() { // from class: app.rive.runtime.kotlin.core.FileAsset$cdnUrl$2
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                String cppCDNUrl;
                FileAsset fileAsset = FileAsset.this;
                cppCDNUrl = fileAsset.cppCDNUrl(fileAsset.getCppPointer());
                return cppCDNUrl;
            }
        });
    }
}
