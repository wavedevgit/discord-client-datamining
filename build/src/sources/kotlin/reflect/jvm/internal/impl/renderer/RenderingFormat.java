package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class RenderingFormat {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ RenderingFormat[] f34119d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34120e;
    public static final RenderingFormat PLAIN = new RenderingFormat("PLAIN", 0) { // from class: kotlin.reflect.jvm.internal.impl.renderer.RenderingFormat.b
        @Override // kotlin.reflect.jvm.internal.impl.renderer.RenderingFormat
        public String escape(String string) {
            Intrinsics.checkNotNullParameter(string, "string");
            return string;
        }
    };
    public static final RenderingFormat HTML = new RenderingFormat("HTML", 1) { // from class: kotlin.reflect.jvm.internal.impl.renderer.RenderingFormat.a
        @Override // kotlin.reflect.jvm.internal.impl.renderer.RenderingFormat
        public String escape(String string) {
            Intrinsics.checkNotNullParameter(string, "string");
            return StringsKt.J(StringsKt.J(string, "<", "&lt;", false, 4, null), ">", "&gt;", false, 4, null);
        }
    };

    static {
        RenderingFormat[] a10 = a();
        f34119d = a10;
        f34120e = xr.a.a(a10);
    }

    public /* synthetic */ RenderingFormat(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10);
    }

    private static final /* synthetic */ RenderingFormat[] a() {
        return new RenderingFormat[]{PLAIN, HTML};
    }

    public static RenderingFormat valueOf(String str) {
        return (RenderingFormat) Enum.valueOf(RenderingFormat.class, str);
    }

    public static RenderingFormat[] values() {
        return (RenderingFormat[]) f34119d.clone();
    }

    @NotNull
    public abstract String escape(@NotNull String str);

    private RenderingFormat(String str, int i10) {
    }
}
