package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f35026a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f35027b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f35028c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f35029d;

    protected void a(MessageLite messageLite) {
        if (this.f35029d == null) {
            synchronized (this) {
                if (this.f35029d != null) {
                    return;
                }
                try {
                    if (this.f35026a != null) {
                        this.f35029d = messageLite.getParserForType().parseFrom(this.f35026a, this.f35027b);
                    } else {
                        this.f35029d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f35028c) {
            return this.f35029d.getSerializedSize();
        }
        return this.f35026a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f35029d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f35029d;
        this.f35029d = messageLite;
        this.f35026a = null;
        this.f35028c = true;
        return messageLite2;
    }
}
