package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f33717a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f33718b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f33719c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f33720d;

    protected void a(MessageLite messageLite) {
        if (this.f33720d == null) {
            synchronized (this) {
                if (this.f33720d != null) {
                    return;
                }
                try {
                    if (this.f33717a != null) {
                        this.f33720d = messageLite.getParserForType().parseFrom(this.f33717a, this.f33718b);
                    } else {
                        this.f33720d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f33719c) {
            return this.f33720d.getSerializedSize();
        }
        return this.f33717a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f33720d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f33720d;
        this.f33720d = messageLite;
        this.f33717a = null;
        this.f33719c = true;
        return messageLite2;
    }
}
