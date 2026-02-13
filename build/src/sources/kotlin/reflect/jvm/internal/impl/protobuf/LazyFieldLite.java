package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f34508a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f34509b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f34510c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f34511d;

    protected void a(MessageLite messageLite) {
        if (this.f34511d == null) {
            synchronized (this) {
                if (this.f34511d != null) {
                    return;
                }
                try {
                    if (this.f34508a != null) {
                        this.f34511d = messageLite.getParserForType().parseFrom(this.f34508a, this.f34509b);
                    } else {
                        this.f34511d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f34510c) {
            return this.f34511d.getSerializedSize();
        }
        return this.f34508a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f34511d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f34511d;
        this.f34511d = messageLite;
        this.f34508a = null;
        this.f34510c = true;
        return messageLite2;
    }
}
