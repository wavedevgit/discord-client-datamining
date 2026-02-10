package kotlin.reflect.jvm.internal.impl.incremental.components;

import java.io.Serializable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Position implements Serializable {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: i  reason: collision with root package name */
    private static final Position f32654i = new Position(-1, -1);

    /* renamed from: d  reason: collision with root package name */
    private final int f32655d;

    /* renamed from: e  reason: collision with root package name */
    private final int f32656e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Position getNO_POSITION() {
            return Position.f32654i;
        }

        private Companion() {
        }
    }

    public Position(int i10, int i11) {
        this.f32655d = i10;
        this.f32656e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Position) {
            Position position = (Position) obj;
            return this.f32655d == position.f32655d && this.f32656e == position.f32656e;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f32655d) * 31) + Integer.hashCode(this.f32656e);
    }

    @NotNull
    public String toString() {
        return "Position(line=" + this.f32655d + ", column=" + this.f32656e + ')';
    }
}
