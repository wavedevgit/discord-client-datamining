package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f34416a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f34417b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f34418c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f34419d;

    protected void a(MessageLite messageLite) {
        if (this.f34419d == null) {
            synchronized (this) {
                if (this.f34419d != null) {
                    return;
                }
                try {
                    if (this.f34416a != null) {
                        this.f34419d = messageLite.getParserForType().parseFrom(this.f34416a, this.f34417b);
                    } else {
                        this.f34419d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f34418c) {
            return this.f34419d.getSerializedSize();
        }
        return this.f34416a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f34419d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f34419d;
        this.f34419d = messageLite;
        this.f34416a = null;
        this.f34418c = true;
        return messageLite2;
    }
}
